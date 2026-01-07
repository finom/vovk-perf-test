import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcu")
export default class GcuController {
  @operation({
    summary: "Get Gcu",
  })
  @get()
  static getGcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcu",
  })
  @post("{id}")
  static createGcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
