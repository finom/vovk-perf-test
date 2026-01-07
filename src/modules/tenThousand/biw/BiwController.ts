import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biw")
export default class BiwController {
  @operation({
    summary: "Get Biw",
  })
  @get()
  static getBiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biw",
  })
  @post("{id}")
  static createBiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
