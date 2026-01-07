import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bri")
export default class BriController {
  @operation({
    summary: "Get Bri",
  })
  @get()
  static getBri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bri",
  })
  @post("{id}")
  static createBri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
