import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axe")
export default class AxeController {
  @operation({
    summary: "Get Axe",
  })
  @get()
  static getAxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axe",
  })
  @post("{id}")
  static createAxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
