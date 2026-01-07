import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqw")
export default class AqwController {
  @operation({
    summary: "Get Aqw",
  })
  @get()
  static getAqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqw",
  })
  @post("{id}")
  static createAqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
