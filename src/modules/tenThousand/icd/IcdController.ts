import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icd")
export default class IcdController {
  @operation({
    summary: "Get Icd",
  })
  @get()
  static getIcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icd",
  })
  @post("{id}")
  static createIcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
