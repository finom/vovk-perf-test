import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgm")
export default class CgmController {
  @operation({
    summary: "Get Cgm",
  })
  @get()
  static getCgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgm",
  })
  @post("{id}")
  static createCgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
