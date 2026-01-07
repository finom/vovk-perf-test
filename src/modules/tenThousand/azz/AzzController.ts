import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azz")
export default class AzzController {
  @operation({
    summary: "Get Azz",
  })
  @get()
  static getAzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azz",
  })
  @post("{id}")
  static createAzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
