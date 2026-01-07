import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lij")
export default class LijController {
  @operation({
    summary: "Get Lij",
  })
  @get()
  static getLij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lij",
  })
  @post("{id}")
  static createLij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
