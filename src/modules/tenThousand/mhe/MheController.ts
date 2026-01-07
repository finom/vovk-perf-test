import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhe")
export default class MheController {
  @operation({
    summary: "Get Mhe",
  })
  @get()
  static getMhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhe",
  })
  @post("{id}")
  static createMhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
