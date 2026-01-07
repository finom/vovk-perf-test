import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoq")
export default class EoqController {
  @operation({
    summary: "Get Eoq",
  })
  @get()
  static getEoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoq",
  })
  @post("{id}")
  static createEoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
