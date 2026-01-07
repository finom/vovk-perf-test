import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efb")
export default class EfbController {
  @operation({
    summary: "Get Efb",
  })
  @get()
  static getEfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efb",
  })
  @post("{id}")
  static createEfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
