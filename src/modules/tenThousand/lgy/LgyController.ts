import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgy")
export default class LgyController {
  @operation({
    summary: "Get Lgy",
  })
  @get()
  static getLgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgy",
  })
  @post("{id}")
  static createLgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
