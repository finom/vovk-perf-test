import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iev")
export default class IevController {
  @operation({
    summary: "Get Iev",
  })
  @get()
  static getIev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iev",
  })
  @post("{id}")
  static createIev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
