import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apm")
export default class ApmController {
  @operation({
    summary: "Get Apm",
  })
  @get()
  static getApm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apm",
  })
  @post("{id}")
  static createApm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
