import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dme")
export default class DmeController {
  @operation({
    summary: "Get Dme",
  })
  @get()
  static getDme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dme",
  })
  @post("{id}")
  static createDme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
