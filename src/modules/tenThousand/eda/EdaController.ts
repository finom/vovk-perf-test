import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eda")
export default class EdaController {
  @operation({
    summary: "Get Eda",
  })
  @get()
  static getEda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eda",
  })
  @post("{id}")
  static createEda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
