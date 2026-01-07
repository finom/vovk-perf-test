import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkh")
export default class JkhController {
  @operation({
    summary: "Get Jkh",
  })
  @get()
  static getJkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkh",
  })
  @post("{id}")
  static createJkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
