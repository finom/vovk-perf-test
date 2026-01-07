import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcf")
export default class FcfController {
  @operation({
    summary: "Get Fcf",
  })
  @get()
  static getFcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcf",
  })
  @post("{id}")
  static createFcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
