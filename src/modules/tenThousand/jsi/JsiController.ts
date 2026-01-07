import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsi")
export default class JsiController {
  @operation({
    summary: "Get Jsi",
  })
  @get()
  static getJsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsi",
  })
  @post("{id}")
  static createJsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
