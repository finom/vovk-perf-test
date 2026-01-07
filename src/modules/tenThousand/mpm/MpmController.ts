import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpm")
export default class MpmController {
  @operation({
    summary: "Get Mpm",
  })
  @get()
  static getMpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpm",
  })
  @post("{id}")
  static createMpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
