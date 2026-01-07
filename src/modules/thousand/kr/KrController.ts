import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kr")
export default class KrController {
  @operation({
    summary: "Get Kr",
  })
  @get()
  static getKr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kr",
  })
  @post("{id}")
  static createKr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
