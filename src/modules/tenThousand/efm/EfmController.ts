import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efm")
export default class EfmController {
  @operation({
    summary: "Get Efm",
  })
  @get()
  static getEfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efm",
  })
  @post("{id}")
  static createEfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
