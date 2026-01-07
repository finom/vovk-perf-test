import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fic")
export default class FicController {
  @operation({
    summary: "Get Fic",
  })
  @get()
  static getFic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fic",
  })
  @post("{id}")
  static createFic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
