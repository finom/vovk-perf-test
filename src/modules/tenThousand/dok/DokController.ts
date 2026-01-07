import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dok")
export default class DokController {
  @operation({
    summary: "Get Dok",
  })
  @get()
  static getDok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dok",
  })
  @post("{id}")
  static createDok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
