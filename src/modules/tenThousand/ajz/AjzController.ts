import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajz")
export default class AjzController {
  @operation({
    summary: "Get Ajz",
  })
  @get()
  static getAjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajz",
  })
  @post("{id}")
  static createAjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
