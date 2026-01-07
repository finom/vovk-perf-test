import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehg")
export default class EhgController {
  @operation({
    summary: "Get Ehg",
  })
  @get()
  static getEhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehg",
  })
  @post("{id}")
  static createEhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
