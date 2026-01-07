import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgg")
export default class JggController {
  @operation({
    summary: "Get Jgg",
  })
  @get()
  static getJgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgg",
  })
  @post("{id}")
  static createJgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
