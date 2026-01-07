import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmu")
export default class LmuController {
  @operation({
    summary: "Get Lmu",
  })
  @get()
  static getLmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmu",
  })
  @post("{id}")
  static createLmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
