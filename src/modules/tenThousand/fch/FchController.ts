import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fch")
export default class FchController {
  @operation({
    summary: "Get Fch",
  })
  @get()
  static getFch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fch",
  })
  @post("{id}")
  static createFch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
