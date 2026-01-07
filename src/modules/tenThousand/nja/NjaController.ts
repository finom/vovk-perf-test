import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nja")
export default class NjaController {
  @operation({
    summary: "Get Nja",
  })
  @get()
  static getNja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nja",
  })
  @post("{id}")
  static createNja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
