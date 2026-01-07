import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ila")
export default class IlaController {
  @operation({
    summary: "Get Ila",
  })
  @get()
  static getIla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ila",
  })
  @post("{id}")
  static createIla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
