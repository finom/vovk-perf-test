import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jab")
export default class JabController {
  @operation({
    summary: "Get Jab",
  })
  @get()
  static getJab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jab",
  })
  @post("{id}")
  static createJab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
