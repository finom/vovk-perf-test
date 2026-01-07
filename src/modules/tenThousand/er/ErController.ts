import { procedure, prefix, get, post, operation } from "vovk";

@prefix("er")
export default class ErController {
  @operation({
    summary: "Get Er",
  })
  @get()
  static getEr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Er",
  })
  @post("{id}")
  static createEr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
