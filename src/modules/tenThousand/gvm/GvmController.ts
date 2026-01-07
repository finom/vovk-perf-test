import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvm")
export default class GvmController {
  @operation({
    summary: "Get Gvm",
  })
  @get()
  static getGvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvm",
  })
  @post("{id}")
  static createGvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
