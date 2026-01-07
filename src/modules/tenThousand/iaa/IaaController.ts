import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaa")
export default class IaaController {
  @operation({
    summary: "Get Iaa",
  })
  @get()
  static getIaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaa",
  })
  @post("{id}")
  static createIaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
