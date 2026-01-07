import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eej")
export default class EejController {
  @operation({
    summary: "Get Eej",
  })
  @get()
  static getEej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eej",
  })
  @post("{id}")
  static createEej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
