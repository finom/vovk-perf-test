import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpm")
export default class CpmController {
  @operation({
    summary: "Get Cpm",
  })
  @get()
  static getCpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpm",
  })
  @post("{id}")
  static createCpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
