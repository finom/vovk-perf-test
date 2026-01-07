import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mss")
export default class MssController {
  @operation({
    summary: "Get Mss",
  })
  @get()
  static getMss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mss",
  })
  @post("{id}")
  static createMss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
