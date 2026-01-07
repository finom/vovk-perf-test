import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ek")
export default class EkController {
  @operation({
    summary: "Get Ek",
  })
  @get()
  static getEk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ek",
  })
  @post("{id}")
  static createEk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
