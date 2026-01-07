import { procedure, prefix, get, post, operation } from "vovk";

@prefix("but")
export default class ButController {
  @operation({
    summary: "Get But",
  })
  @get()
  static getBut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create But",
  })
  @post("{id}")
  static createBut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
