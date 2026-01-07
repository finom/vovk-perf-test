import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aju")
export default class AjuController {
  @operation({
    summary: "Get Aju",
  })
  @get()
  static getAju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aju",
  })
  @post("{id}")
  static createAju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
