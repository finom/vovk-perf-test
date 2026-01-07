import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebr")
export default class EbrController {
  @operation({
    summary: "Get Ebr",
  })
  @get()
  static getEbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebr",
  })
  @post("{id}")
  static createEbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
