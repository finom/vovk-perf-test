import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnn")
export default class HnnController {
  @operation({
    summary: "Get Hnn",
  })
  @get()
  static getHnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnn",
  })
  @post("{id}")
  static createHnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
