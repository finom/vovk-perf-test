import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nl")
export default class NlController {
  @operation({
    summary: "Get Nl",
  })
  @get()
  static getNl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nl",
  })
  @post("{id}")
  static createNl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
