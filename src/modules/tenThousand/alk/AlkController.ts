import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alk")
export default class AlkController {
  @operation({
    summary: "Get Alk",
  })
  @get()
  static getAlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alk",
  })
  @post("{id}")
  static createAlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
