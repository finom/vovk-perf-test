import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctq")
export default class CtqController {
  @operation({
    summary: "Get Ctq",
  })
  @get()
  static getCtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctq",
  })
  @post("{id}")
  static createCtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
