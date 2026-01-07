import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfk")
export default class MfkController {
  @operation({
    summary: "Get Mfk",
  })
  @get()
  static getMfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfk",
  })
  @post("{id}")
  static createMfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
