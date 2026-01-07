import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhc")
export default class LhcController {
  @operation({
    summary: "Get Lhc",
  })
  @get()
  static getLhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhc",
  })
  @post("{id}")
  static createLhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
