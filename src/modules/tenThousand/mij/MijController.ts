import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mij")
export default class MijController {
  @operation({
    summary: "Get Mij",
  })
  @get()
  static getMij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mij",
  })
  @post("{id}")
  static createMij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
