// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: axW1Q7tQMGoC9jdxnXE57v
// Component: nCuyWdq8qHox
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicPageGuard as PlasmicPageGuard__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  initializePlasmicStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: CZ9Ckf2FOzzF/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { ConditionGuard } from "@plasmicpkgs/plasmic-basic-components";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { useScreenVariants as useScreenVariantsk21KBn6Vb9Ed } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: K21kBN6Vb9ed/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: axW1Q7tQMGoC9jdxnXE57v/projectcss
import sty from "./PlasmicPharmacy.module.css"; // plasmic-import: nCuyWdq8qHox/css

createPlasmicElementProxy;

export const PlasmicPharmacy__VariantProps = new Array();

export const PlasmicPharmacy__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPharmacy__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input[].value",
        type: "private",
        variableType: "text",
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const new$Queries = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "kg27Khthh5W85SBD6wGA9T",
        opId: "dfaeea8e-beb8-402b-815f-2d694c27b625",
        userArgs: {},
        cacheKey: `plasmic.$.dfaeea8e-beb8-402b-815f-2d694c27b625.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    query2: usePlasmicDataOp(() => {
      return {
        sourceId: "4ZYYADAQoesjszGqnyuasC",
        opId: "6ee5479c-0f5c-44cc-9680-caaa08cba966",
        userArgs: {},
        cacheKey: `plasmic.$.6ee5479c-0f5c-44cc-9680-caaa08cba966.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsk21KBn6Vb9Ed()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPharmacy.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPharmacy.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPharmacy.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    data-plasmic-name={"section"}
                    data-plasmic-override={overrides.section}
                    className={classNames(projectcss.all, sty.section)}
                  >
                    <Stack__
                      as={"div"}
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox)}
                    />
                  </section>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Pharmacy"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: [
                        { label: "Name", name: "name", inputType: "Text" },
                        {
                          label: "Message",
                          name: "message",
                          inputType: "Text Area"
                        }
                      ],

                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: "advanced",
                      onIsSubmittingChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      submitSlot: null,
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        {(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return $queries.query.data;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return [];
                              }
                              throw e;
                            }
                          })()
                        ).map((__plasmic_item_0, __plasmic_idx_0) => {
                          const currentItem = __plasmic_item_0;
                          const currentIndex = __plasmic_idx_0;
                          return (
                            <FormItemWrapper
                              data-plasmic-name={"formField"}
                              data-plasmic-override={overrides.formField}
                              className={classNames(
                                "__wab_instance",
                                sty.formField
                              )}
                              initialValue={(() => {
                                try {
                                  return undefined;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                              key={currentIndex}
                              label={
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem.Question;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "Name";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              }
                              name={(() => {
                                try {
                                  return currentItem.__airtable_id;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                            >
                              <ConditionGuard
                                className={classNames(
                                  "__wab_instance",
                                  sty.conditionGuard__bAkRs
                                )}
                                condition={(() => {
                                  try {
                                    return (
                                      currentItem.Question !=
                                      "Name of the business owner"
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return true;
                                    }
                                    throw e;
                                  }
                                })()}
                              >
                                <PlasmicImg__
                                  data-plasmic-name={"img"}
                                  data-plasmic-override={overrides.img}
                                  alt={""}
                                  className={classNames(sty.img)}
                                  displayHeight={"auto"}
                                  displayMaxHeight={"none"}
                                  displayMaxWidth={"100%"}
                                  displayMinHeight={"0"}
                                  displayMinWidth={"0"}
                                  displayWidth={"50px"}
                                  loading={"lazy"}
                                  src={{
                                    src: "/plasmic/portal/images/image4.png",
                                    fullWidth: 100,
                                    fullHeight: 100,
                                    aspectRatio: undefined
                                  }}
                                />
                              </ConditionGuard>
                              <ConditionGuard
                                className={classNames(
                                  "__wab_instance",
                                  sty.conditionGuard__paXio
                                )}
                                condition={(() => {
                                  try {
                                    return (
                                      currentItem.Question ==
                                      "Name of the business owner"
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return true;
                                    }
                                    throw e;
                                  }
                                })()}
                              >
                                {(() => {
                                  const child$Props = {
                                    className: classNames(
                                      "__wab_instance",
                                      sty.input
                                    ),
                                    onChange:
                                      generateStateOnChangePropForCodeComponents(
                                        $state,
                                        "value",
                                        ["input", __plasmic_idx_0, "value"],
                                        AntdInput_Helpers
                                      ),
                                    value: generateStateValueProp($state, [
                                      "input",
                                      __plasmic_idx_0,
                                      "value"
                                    ])
                                  };
                                  initializeCodeComponentStates(
                                    $state,
                                    [
                                      {
                                        name: "value",
                                        plasmicStateName: "input[].value"
                                      }
                                    ],

                                    [__plasmic_idx_0],
                                    AntdInput_Helpers ?? {},
                                    child$Props
                                  );
                                  initializePlasmicStates(
                                    $state,
                                    [
                                      {
                                        name: "input[].value",
                                        initFunc: ({
                                          $props,
                                          $state,
                                          $queries
                                        }) => undefined
                                      }
                                    ],

                                    [__plasmic_idx_0]
                                  );
                                  return (
                                    <AntdInput
                                      data-plasmic-name={"input"}
                                      data-plasmic-override={overrides.input}
                                      {...child$Props}
                                    />
                                  );
                                })()}
                              </ConditionGuard>
                            </FormItemWrapper>
                          );
                        })}
                      </FormWrapper>
                    );
                  })()}
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                  >
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {"Get Certified"}
                    </div>
                  </AntdButton>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "form",
    "formField",
    "img",
    "input",
    "button",
    "text"
  ],

  pageLayout: [
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "form",
    "formField",
    "img",
    "input",
    "button",
    "text"
  ],

  section: ["section", "freeBox"],
  freeBox: ["freeBox"],
  h1: ["h1"],
  form: ["form", "formField", "img", "input"],
  formField: ["formField", "img", "input"],
  img: ["img"],
  input: ["input"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPharmacy__ArgProps,
          internalVariantPropNames: PlasmicPharmacy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPharmacy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPharmacy";
  } else {
    func.displayName = `PlasmicPharmacy.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"axW1Q7tQMGoC9jdxnXE57v"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicPharmacy = Object.assign(
  // Top-level PlasmicPharmacy renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    formField: makeNodeComponent("formField"),
    img: makeNodeComponent("img"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicPharmacy
    internalVariantProps: PlasmicPharmacy__VariantProps,
    internalArgProps: PlasmicPharmacy__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "pharmacy",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPharmacy;
/* prettier-ignore-end */
