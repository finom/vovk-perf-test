import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imp")
export default class ImpController {
  @operation({
    summary: "Get Imp",
  })
  @get()
  static getImp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imp",
  })
  @post("{id}")
  static createImp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
