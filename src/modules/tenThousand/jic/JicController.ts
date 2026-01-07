import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jic")
export default class JicController {
  @operation({
    summary: "Get Jic",
  })
  @get()
  static getJic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jic",
  })
  @post("{id}")
  static createJic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
