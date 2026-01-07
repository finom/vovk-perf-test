import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgz")
export default class FgzController {
  @operation({
    summary: "Get Fgz",
  })
  @get()
  static getFgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgz",
  })
  @post("{id}")
  static createFgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
