import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfz")
export default class MfzController {
  @operation({
    summary: "Get Mfz",
  })
  @get()
  static getMfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfz",
  })
  @post("{id}")
  static createMfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
