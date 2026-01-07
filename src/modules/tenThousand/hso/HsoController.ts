import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hso")
export default class HsoController {
  @operation({
    summary: "Get Hso",
  })
  @get()
  static getHso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hso",
  })
  @post("{id}")
  static createHso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
