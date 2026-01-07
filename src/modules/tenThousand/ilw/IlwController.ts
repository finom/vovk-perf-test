import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilw")
export default class IlwController {
  @operation({
    summary: "Get Ilw",
  })
  @get()
  static getIlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilw",
  })
  @post("{id}")
  static createIlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
