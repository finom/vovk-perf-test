import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibm")
export default class IbmController {
  @operation({
    summary: "Get Ibm",
  })
  @get()
  static getIbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibm",
  })
  @post("{id}")
  static createIbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
