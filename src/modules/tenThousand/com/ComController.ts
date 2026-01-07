import { procedure, prefix, get, post, operation } from "vovk";

@prefix("com")
export default class ComController {
  @operation({
    summary: "Get Com",
  })
  @get()
  static getCom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Com",
  })
  @post("{id}")
  static createCom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
