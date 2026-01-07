import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aye")
export default class AyeController {
  @operation({
    summary: "Get Aye",
  })
  @get()
  static getAye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aye",
  })
  @post("{id}")
  static createAye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
