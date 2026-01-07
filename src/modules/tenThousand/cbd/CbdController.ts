import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbd")
export default class CbdController {
  @operation({
    summary: "Get Cbd",
  })
  @get()
  static getCbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbd",
  })
  @post("{id}")
  static createCbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
