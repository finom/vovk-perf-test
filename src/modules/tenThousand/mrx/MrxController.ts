import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrx")
export default class MrxController {
  @operation({
    summary: "Get Mrx",
  })
  @get()
  static getMrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrx",
  })
  @post("{id}")
  static createMrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
