import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwt")
export default class MwtController {
  @operation({
    summary: "Get Mwt",
  })
  @get()
  static getMwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwt",
  })
  @post("{id}")
  static createMwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
