import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwr")
export default class BwrController {
  @operation({
    summary: "Get Bwr",
  })
  @get()
  static getBwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwr",
  })
  @post("{id}")
  static createBwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
