import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuc")
export default class CucController {
  @operation({
    summary: "Get Cuc",
  })
  @get()
  static getCuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuc",
  })
  @post("{id}")
  static createCuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
