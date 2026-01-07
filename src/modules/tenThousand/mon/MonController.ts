import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mon")
export default class MonController {
  @operation({
    summary: "Get Mon",
  })
  @get()
  static getMon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mon",
  })
  @post("{id}")
  static createMon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
