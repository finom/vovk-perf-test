import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbe")
export default class LbeController {
  @operation({
    summary: "Get Lbe",
  })
  @get()
  static getLbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbe",
  })
  @post("{id}")
  static createLbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
