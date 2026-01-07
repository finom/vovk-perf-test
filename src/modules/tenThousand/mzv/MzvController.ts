import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzv")
export default class MzvController {
  @operation({
    summary: "Get Mzv",
  })
  @get()
  static getMzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzv",
  })
  @post("{id}")
  static createMzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
