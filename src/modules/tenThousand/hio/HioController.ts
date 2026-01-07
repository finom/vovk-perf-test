import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hio")
export default class HioController {
  @operation({
    summary: "Get Hio",
  })
  @get()
  static getHio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hio",
  })
  @post("{id}")
  static createHio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
