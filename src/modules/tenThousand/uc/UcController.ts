import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uc")
export default class UcController {
  @operation({
    summary: "Get Uc",
  })
  @get()
  static getUc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uc",
  })
  @post("{id}")
  static createUc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
