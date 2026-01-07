import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loz")
export default class LozController {
  @operation({
    summary: "Get Loz",
  })
  @get()
  static getLoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loz",
  })
  @post("{id}")
  static createLoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
