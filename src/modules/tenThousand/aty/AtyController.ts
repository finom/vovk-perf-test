import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aty")
export default class AtyController {
  @operation({
    summary: "Get Aty",
  })
  @get()
  static getAty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aty",
  })
  @post("{id}")
  static createAty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
