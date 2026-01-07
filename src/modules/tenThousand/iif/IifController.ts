import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iif")
export default class IifController {
  @operation({
    summary: "Get Iif",
  })
  @get()
  static getIif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iif",
  })
  @post("{id}")
  static createIif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
