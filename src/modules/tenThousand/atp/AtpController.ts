import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atp")
export default class AtpController {
  @operation({
    summary: "Get Atp",
  })
  @get()
  static getAtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atp",
  })
  @post("{id}")
  static createAtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
