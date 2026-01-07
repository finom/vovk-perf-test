import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecd")
export default class EcdController {
  @operation({
    summary: "Get Ecd",
  })
  @get()
  static getEcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecd",
  })
  @post("{id}")
  static createEcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
