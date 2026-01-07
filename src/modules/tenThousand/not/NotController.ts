import { procedure, prefix, get, post, operation } from "vovk";

@prefix("not")
export default class NotController {
  @operation({
    summary: "Get Not",
  })
  @get()
  static getNot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Not",
  })
  @post("{id}")
  static createNot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
