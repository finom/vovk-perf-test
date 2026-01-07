import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foh")
export default class FohController {
  @operation({
    summary: "Get Foh",
  })
  @get()
  static getFoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foh",
  })
  @post("{id}")
  static createFoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
