import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzh")
export default class MzhController {
  @operation({
    summary: "Get Mzh",
  })
  @get()
  static getMzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzh",
  })
  @post("{id}")
  static createMzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
