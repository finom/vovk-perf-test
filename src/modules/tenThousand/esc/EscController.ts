import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esc")
export default class EscController {
  @operation({
    summary: "Get Esc",
  })
  @get()
  static getEsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esc",
  })
  @post("{id}")
  static createEsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
