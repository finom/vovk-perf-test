import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdd")
export default class JddController {
  @operation({
    summary: "Get Jdd",
  })
  @get()
  static getJdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdd",
  })
  @post("{id}")
  static createJdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
