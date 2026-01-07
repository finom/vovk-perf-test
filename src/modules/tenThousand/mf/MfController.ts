import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mf")
export default class MfController {
  @operation({
    summary: "Get Mf",
  })
  @get()
  static getMf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mf",
  })
  @post("{id}")
  static createMf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
