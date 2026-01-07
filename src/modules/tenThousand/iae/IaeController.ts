import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iae")
export default class IaeController {
  @operation({
    summary: "Get Iae",
  })
  @get()
  static getIae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iae",
  })
  @post("{id}")
  static createIae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
