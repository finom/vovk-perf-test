import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csx")
export default class CsxController {
  @operation({
    summary: "Get Csx",
  })
  @get()
  static getCsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csx",
  })
  @post("{id}")
  static createCsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
