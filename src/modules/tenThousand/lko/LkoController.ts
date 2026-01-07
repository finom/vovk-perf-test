import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lko")
export default class LkoController {
  @operation({
    summary: "Get Lko",
  })
  @get()
  static getLko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lko",
  })
  @post("{id}")
  static createLko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
