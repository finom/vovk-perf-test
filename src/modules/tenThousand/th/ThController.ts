import { procedure, prefix, get, post, operation } from "vovk";

@prefix("th")
export default class ThController {
  @operation({
    summary: "Get Th",
  })
  @get()
  static getTh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Th",
  })
  @post("{id}")
  static createTh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
