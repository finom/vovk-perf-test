import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azm")
export default class AzmController {
  @operation({
    summary: "Get Azm",
  })
  @get()
  static getAzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azm",
  })
  @post("{id}")
  static createAzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
