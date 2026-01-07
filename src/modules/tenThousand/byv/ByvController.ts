import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byv")
export default class ByvController {
  @operation({
    summary: "Get Byv",
  })
  @get()
  static getByv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byv",
  })
  @post("{id}")
  static createByv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
