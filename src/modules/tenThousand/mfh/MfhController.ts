import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfh")
export default class MfhController {
  @operation({
    summary: "Get Mfh",
  })
  @get()
  static getMfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfh",
  })
  @post("{id}")
  static createMfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
