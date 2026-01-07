import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtj")
export default class MtjController {
  @operation({
    summary: "Get Mtj",
  })
  @get()
  static getMtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtj",
  })
  @post("{id}")
  static createMtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
