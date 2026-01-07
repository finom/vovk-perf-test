import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbe")
export default class JbeController {
  @operation({
    summary: "Get Jbe",
  })
  @get()
  static getJbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbe",
  })
  @post("{id}")
  static createJbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
