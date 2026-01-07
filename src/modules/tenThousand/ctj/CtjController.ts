import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctj")
export default class CtjController {
  @operation({
    summary: "Get Ctj",
  })
  @get()
  static getCtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctj",
  })
  @post("{id}")
  static createCtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
