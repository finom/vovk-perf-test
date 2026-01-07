import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwa")
export default class CwaController {
  @operation({
    summary: "Get Cwa",
  })
  @get()
  static getCwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwa",
  })
  @post("{id}")
  static createCwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
