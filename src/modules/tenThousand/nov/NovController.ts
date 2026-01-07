import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nov")
export default class NovController {
  @operation({
    summary: "Get Nov",
  })
  @get()
  static getNov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nov",
  })
  @post("{id}")
  static createNov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
