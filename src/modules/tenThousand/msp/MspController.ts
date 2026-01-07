import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msp")
export default class MspController {
  @operation({
    summary: "Get Msp",
  })
  @get()
  static getMsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msp",
  })
  @post("{id}")
  static createMsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
