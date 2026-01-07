import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guc")
export default class GucController {
  @operation({
    summary: "Get Guc",
  })
  @get()
  static getGuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guc",
  })
  @post("{id}")
  static createGuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
