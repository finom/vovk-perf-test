import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsw")
export default class LswController {
  @operation({
    summary: "Get Lsw",
  })
  @get()
  static getLsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsw",
  })
  @post("{id}")
  static createLsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
