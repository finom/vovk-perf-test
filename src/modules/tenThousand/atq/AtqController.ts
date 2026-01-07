import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atq")
export default class AtqController {
  @operation({
    summary: "Get Atq",
  })
  @get()
  static getAtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atq",
  })
  @post("{id}")
  static createAtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
