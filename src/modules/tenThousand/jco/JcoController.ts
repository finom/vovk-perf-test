import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jco")
export default class JcoController {
  @operation({
    summary: "Get Jco",
  })
  @get()
  static getJco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jco",
  })
  @post("{id}")
  static createJco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
