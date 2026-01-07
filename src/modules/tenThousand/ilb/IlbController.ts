import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilb")
export default class IlbController {
  @operation({
    summary: "Get Ilb",
  })
  @get()
  static getIlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilb",
  })
  @post("{id}")
  static createIlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
