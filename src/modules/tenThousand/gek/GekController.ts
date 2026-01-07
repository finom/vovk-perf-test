import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gek")
export default class GekController {
  @operation({
    summary: "Get Gek",
  })
  @get()
  static getGek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gek",
  })
  @post("{id}")
  static createGek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
