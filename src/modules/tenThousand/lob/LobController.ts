import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lob")
export default class LobController {
  @operation({
    summary: "Get Lob",
  })
  @get()
  static getLob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lob",
  })
  @post("{id}")
  static createLob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
