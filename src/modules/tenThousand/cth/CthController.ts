import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cth")
export default class CthController {
  @operation({
    summary: "Get Cth",
  })
  @get()
  static getCth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cth",
  })
  @post("{id}")
  static createCth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
