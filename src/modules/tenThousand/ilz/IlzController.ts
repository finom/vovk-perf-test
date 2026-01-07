import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilz")
export default class IlzController {
  @operation({
    summary: "Get Ilz",
  })
  @get()
  static getIlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilz",
  })
  @post("{id}")
  static createIlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
