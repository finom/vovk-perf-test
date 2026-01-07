import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maz")
export default class MazController {
  @operation({
    summary: "Get Maz",
  })
  @get()
  static getMaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maz",
  })
  @post("{id}")
  static createMaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
