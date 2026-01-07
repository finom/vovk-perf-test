import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cod")
export default class CodController {
  @operation({
    summary: "Get Cod",
  })
  @get()
  static getCod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cod",
  })
  @post("{id}")
  static createCod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
