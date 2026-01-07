import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hld")
export default class HldController {
  @operation({
    summary: "Get Hld",
  })
  @get()
  static getHld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hld",
  })
  @post("{id}")
  static createHld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
