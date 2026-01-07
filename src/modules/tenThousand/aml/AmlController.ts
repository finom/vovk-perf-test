import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aml")
export default class AmlController {
  @operation({
    summary: "Get Aml",
  })
  @get()
  static getAml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aml",
  })
  @post("{id}")
  static createAml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
