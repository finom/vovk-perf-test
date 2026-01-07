import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byk")
export default class BykController {
  @operation({
    summary: "Get Byk",
  })
  @get()
  static getByk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byk",
  })
  @post("{id}")
  static createByk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
