import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ety")
export default class EtyController {
  @operation({
    summary: "Get Ety",
  })
  @get()
  static getEty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ety",
  })
  @post("{id}")
  static createEty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
