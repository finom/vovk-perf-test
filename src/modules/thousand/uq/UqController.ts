import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uq")
export default class UqController {
  @operation({
    summary: "Get Uq",
  })
  @get()
  static getUq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uq",
  })
  @post("{id}")
  static createUq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
