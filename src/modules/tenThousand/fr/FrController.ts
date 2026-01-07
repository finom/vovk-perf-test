import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fr")
export default class FrController {
  @operation({
    summary: "Get Fr",
  })
  @get()
  static getFr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fr",
  })
  @post("{id}")
  static createFr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
