import { procedure, prefix, get, post, operation } from "vovk";

@prefix("d")
export default class DController {
  @operation({
    summary: "Get D",
  })
  @get()
  static getD = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create D",
  })
  @post("{id}")
  static createD = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
