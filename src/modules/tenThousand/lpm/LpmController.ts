import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpm")
export default class LpmController {
  @operation({
    summary: "Get Lpm",
  })
  @get()
  static getLpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpm",
  })
  @post("{id}")
  static createLpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
