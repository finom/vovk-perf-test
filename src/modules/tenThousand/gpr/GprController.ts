import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpr")
export default class GprController {
  @operation({
    summary: "Get Gpr",
  })
  @get()
  static getGpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpr",
  })
  @post("{id}")
  static createGpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
