import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyk")
export default class GykController {
  @operation({
    summary: "Get Gyk",
  })
  @get()
  static getGyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyk",
  })
  @post("{id}")
  static createGyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
