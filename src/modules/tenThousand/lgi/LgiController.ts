import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgi")
export default class LgiController {
  @operation({
    summary: "Get Lgi",
  })
  @get()
  static getLgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgi",
  })
  @post("{id}")
  static createLgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
