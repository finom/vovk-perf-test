import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fie")
export default class FieController {
  @operation({
    summary: "Get Fie",
  })
  @get()
  static getFie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fie",
  })
  @post("{id}")
  static createFie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
