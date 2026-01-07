import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwh")
export default class MwhController {
  @operation({
    summary: "Get Mwh",
  })
  @get()
  static getMwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwh",
  })
  @post("{id}")
  static createMwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
