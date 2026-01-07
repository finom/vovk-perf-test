import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ech")
export default class EchController {
  @operation({
    summary: "Get Ech",
  })
  @get()
  static getEch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ech",
  })
  @post("{id}")
  static createEch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
