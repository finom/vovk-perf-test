import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfl")
export default class HflController {
  @operation({
    summary: "Get Hfl",
  })
  @get()
  static getHfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfl",
  })
  @post("{id}")
  static createHfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
