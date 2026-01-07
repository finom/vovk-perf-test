import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miq")
export default class MiqController {
  @operation({
    summary: "Get Miq",
  })
  @get()
  static getMiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miq",
  })
  @post("{id}")
  static createMiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
