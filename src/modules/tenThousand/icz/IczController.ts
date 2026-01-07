import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icz")
export default class IczController {
  @operation({
    summary: "Get Icz",
  })
  @get()
  static getIcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icz",
  })
  @post("{id}")
  static createIcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
