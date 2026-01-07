import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpm")
export default class DpmController {
  @operation({
    summary: "Get Dpm",
  })
  @get()
  static getDpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpm",
  })
  @post("{id}")
  static createDpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
