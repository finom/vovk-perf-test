import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nak")
export default class NakController {
  @operation({
    summary: "Get Nak",
  })
  @get()
  static getNak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nak",
  })
  @post("{id}")
  static createNak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
