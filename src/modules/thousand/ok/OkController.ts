import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ok")
export default class OkController {
  @operation({
    summary: "Get Ok",
  })
  @get()
  static getOk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ok",
  })
  @post("{id}")
  static createOk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
