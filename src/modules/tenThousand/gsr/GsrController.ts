import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsr")
export default class GsrController {
  @operation({
    summary: "Get Gsr",
  })
  @get()
  static getGsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsr",
  })
  @post("{id}")
  static createGsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
