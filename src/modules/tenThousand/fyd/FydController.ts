import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyd")
export default class FydController {
  @operation({
    summary: "Get Fyd",
  })
  @get()
  static getFyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyd",
  })
  @post("{id}")
  static createFyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
