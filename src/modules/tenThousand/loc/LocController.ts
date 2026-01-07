import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loc")
export default class LocController {
  @operation({
    summary: "Get Loc",
  })
  @get()
  static getLoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loc",
  })
  @post("{id}")
  static createLoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
