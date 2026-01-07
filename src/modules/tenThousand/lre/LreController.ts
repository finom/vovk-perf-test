import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lre")
export default class LreController {
  @operation({
    summary: "Get Lre",
  })
  @get()
  static getLre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lre",
  })
  @post("{id}")
  static createLre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
