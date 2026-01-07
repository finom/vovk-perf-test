import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nle")
export default class NleController {
  @operation({
    summary: "Get Nle",
  })
  @get()
  static getNle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nle",
  })
  @post("{id}")
  static createNle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
