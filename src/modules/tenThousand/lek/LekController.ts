import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lek")
export default class LekController {
  @operation({
    summary: "Get Lek",
  })
  @get()
  static getLek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lek",
  })
  @post("{id}")
  static createLek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
