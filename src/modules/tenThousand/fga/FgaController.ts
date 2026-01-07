import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fga")
export default class FgaController {
  @operation({
    summary: "Get Fga",
  })
  @get()
  static getFga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fga",
  })
  @post("{id}")
  static createFga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
