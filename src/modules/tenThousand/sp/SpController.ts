import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sp")
export default class SpController {
  @operation({
    summary: "Get Sp",
  })
  @get()
  static getSp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sp",
  })
  @post("{id}")
  static createSp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
