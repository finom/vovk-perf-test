import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifm")
export default class IfmController {
  @operation({
    summary: "Get Ifm",
  })
  @get()
  static getIfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifm",
  })
  @post("{id}")
  static createIfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
