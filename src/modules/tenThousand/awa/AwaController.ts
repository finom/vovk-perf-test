import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awa")
export default class AwaController {
  @operation({
    summary: "Get Awa",
  })
  @get()
  static getAwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awa",
  })
  @post("{id}")
  static createAwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
