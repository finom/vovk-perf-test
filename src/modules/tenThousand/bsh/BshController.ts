import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsh")
export default class BshController {
  @operation({
    summary: "Get Bsh",
  })
  @get()
  static getBsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsh",
  })
  @post("{id}")
  static createBsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
