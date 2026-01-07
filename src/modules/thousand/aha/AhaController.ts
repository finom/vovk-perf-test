import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aha")
export default class AhaController {
  @operation({
    summary: "Get Aha",
  })
  @get()
  static getAha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aha",
  })
  @post("{id}")
  static createAha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
