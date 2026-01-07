import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwy")
export default class GwyController {
  @operation({
    summary: "Get Gwy",
  })
  @get()
  static getGwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwy",
  })
  @post("{id}")
  static createGwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
