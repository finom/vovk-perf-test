import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zm")
export default class ZmController {
  @operation({
    summary: "Get Zm",
  })
  @get()
  static getZm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zm",
  })
  @post("{id}")
  static createZm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
