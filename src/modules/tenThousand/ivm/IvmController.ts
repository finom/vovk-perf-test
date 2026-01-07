import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivm")
export default class IvmController {
  @operation({
    summary: "Get Ivm",
  })
  @get()
  static getIvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivm",
  })
  @post("{id}")
  static createIvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
