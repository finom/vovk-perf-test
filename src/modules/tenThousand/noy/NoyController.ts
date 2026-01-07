import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noy")
export default class NoyController {
  @operation({
    summary: "Get Noy",
  })
  @get()
  static getNoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noy",
  })
  @post("{id}")
  static createNoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
