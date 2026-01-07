import { procedure, prefix, get, post, operation } from "vovk";

@prefix("to")
export default class ToController {
  @operation({
    summary: "Get To",
  })
  @get()
  static getTo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create To",
  })
  @post("{id}")
  static createTo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
