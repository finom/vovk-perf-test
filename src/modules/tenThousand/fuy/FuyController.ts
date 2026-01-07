import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuy")
export default class FuyController {
  @operation({
    summary: "Get Fuy",
  })
  @get()
  static getFuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuy",
  })
  @post("{id}")
  static createFuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
