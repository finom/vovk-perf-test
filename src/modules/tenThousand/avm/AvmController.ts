import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avm")
export default class AvmController {
  @operation({
    summary: "Get Avm",
  })
  @get()
  static getAvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avm",
  })
  @post("{id}")
  static createAvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
