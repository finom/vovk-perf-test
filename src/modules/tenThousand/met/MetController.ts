import { procedure, prefix, get, post, operation } from "vovk";

@prefix("met")
export default class MetController {
  @operation({
    summary: "Get Met",
  })
  @get()
  static getMet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Met",
  })
  @post("{id}")
  static createMet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
