import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kek")
export default class KekController {
  @operation({
    summary: "Get Kek",
  })
  @get()
  static getKek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kek",
  })
  @post("{id}")
  static createKek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
