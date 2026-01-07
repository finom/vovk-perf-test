import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfe")
export default class CfeController {
  @operation({
    summary: "Get Cfe",
  })
  @get()
  static getCfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfe",
  })
  @post("{id}")
  static createCfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
