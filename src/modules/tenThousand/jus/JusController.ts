import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jus")
export default class JusController {
  @operation({
    summary: "Get Jus",
  })
  @get()
  static getJus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jus",
  })
  @post("{id}")
  static createJus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
