import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grp")
export default class GrpController {
  @operation({
    summary: "Get Grp",
  })
  @get()
  static getGrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grp",
  })
  @post("{id}")
  static createGrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
