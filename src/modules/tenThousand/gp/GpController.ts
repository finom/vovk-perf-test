import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gp")
export default class GpController {
  @operation({
    summary: "Get Gp",
  })
  @get()
  static getGp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gp",
  })
  @post("{id}")
  static createGp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
