import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihe")
export default class IheController {
  @operation({
    summary: "Get Ihe",
  })
  @get()
  static getIhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihe",
  })
  @post("{id}")
  static createIhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
