import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpl")
export default class LplController {
  @operation({
    summary: "Get Lpl",
  })
  @get()
  static getLpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpl",
  })
  @post("{id}")
  static createLpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
