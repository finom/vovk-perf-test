import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biv")
export default class BivController {
  @operation({
    summary: "Get Biv",
  })
  @get()
  static getBiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biv",
  })
  @post("{id}")
  static createBiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
