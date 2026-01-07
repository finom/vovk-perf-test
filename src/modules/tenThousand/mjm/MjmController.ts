import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjm")
export default class MjmController {
  @operation({
    summary: "Get Mjm",
  })
  @get()
  static getMjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjm",
  })
  @post("{id}")
  static createMjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
