import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnn")
export default class NnnController {
  @operation({
    summary: "Get Nnn",
  })
  @get()
  static getNnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnn",
  })
  @post("{id}")
  static createNnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
