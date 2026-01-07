import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfj")
export default class MfjController {
  @operation({
    summary: "Get Mfj",
  })
  @get()
  static getMfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfj",
  })
  @post("{id}")
  static createMfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
