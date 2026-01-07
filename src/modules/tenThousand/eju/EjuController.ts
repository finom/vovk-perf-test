import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eju")
export default class EjuController {
  @operation({
    summary: "Get Eju",
  })
  @get()
  static getEju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eju",
  })
  @post("{id}")
  static createEju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
