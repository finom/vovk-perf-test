import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhc")
export default class MhcController {
  @operation({
    summary: "Get Mhc",
  })
  @get()
  static getMhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhc",
  })
  @post("{id}")
  static createMhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
