import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byc")
export default class BycController {
  @operation({
    summary: "Get Byc",
  })
  @get()
  static getByc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byc",
  })
  @post("{id}")
  static createByc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
