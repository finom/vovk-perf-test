import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hz")
export default class HzController {
  @operation({
    summary: "Get Hz",
  })
  @get()
  static getHz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hz",
  })
  @post("{id}")
  static createHz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
