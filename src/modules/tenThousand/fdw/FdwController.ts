import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdw")
export default class FdwController {
  @operation({
    summary: "Get Fdw",
  })
  @get()
  static getFdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdw",
  })
  @post("{id}")
  static createFdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
