import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bto")
export default class BtoController {
  @operation({
    summary: "Get Bto",
  })
  @get()
  static getBto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bto",
  })
  @post("{id}")
  static createBto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
