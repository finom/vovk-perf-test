import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkf")
export default class JkfController {
  @operation({
    summary: "Get Jkf",
  })
  @get()
  static getJkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkf",
  })
  @post("{id}")
  static createJkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
