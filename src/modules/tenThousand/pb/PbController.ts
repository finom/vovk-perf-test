import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pb")
export default class PbController {
  @operation({
    summary: "Get Pb",
  })
  @get()
  static getPb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pb",
  })
  @post("{id}")
  static createPb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
