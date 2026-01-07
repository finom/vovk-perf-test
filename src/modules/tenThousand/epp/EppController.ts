import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epp")
export default class EppController {
  @operation({
    summary: "Get Epp",
  })
  @get()
  static getEpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epp",
  })
  @post("{id}")
  static createEpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
