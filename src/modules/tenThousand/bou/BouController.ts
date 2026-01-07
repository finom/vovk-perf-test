import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bou")
export default class BouController {
  @operation({
    summary: "Get Bou",
  })
  @get()
  static getBou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bou",
  })
  @post("{id}")
  static createBou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
