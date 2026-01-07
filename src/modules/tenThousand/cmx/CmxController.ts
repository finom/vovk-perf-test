import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmx")
export default class CmxController {
  @operation({
    summary: "Get Cmx",
  })
  @get()
  static getCmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmx",
  })
  @post("{id}")
  static createCmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
