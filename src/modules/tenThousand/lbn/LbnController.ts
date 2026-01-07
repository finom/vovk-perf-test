import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbn")
export default class LbnController {
  @operation({
    summary: "Get Lbn",
  })
  @get()
  static getLbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbn",
  })
  @post("{id}")
  static createLbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
