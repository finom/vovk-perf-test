import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilj")
export default class IljController {
  @operation({
    summary: "Get Ilj",
  })
  @get()
  static getIlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilj",
  })
  @post("{id}")
  static createIlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
