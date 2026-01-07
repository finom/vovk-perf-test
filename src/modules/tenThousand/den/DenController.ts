import { procedure, prefix, get, post, operation } from "vovk";

@prefix("den")
export default class DenController {
  @operation({
    summary: "Get Den",
  })
  @get()
  static getDen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Den",
  })
  @post("{id}")
  static createDen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
