import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kju")
export default class KjuController {
  @operation({
    summary: "Get Kju",
  })
  @get()
  static getKju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kju",
  })
  @post("{id}")
  static createKju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
