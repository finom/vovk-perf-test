import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfc")
export default class MfcController {
  @operation({
    summary: "Get Mfc",
  })
  @get()
  static getMfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfc",
  })
  @post("{id}")
  static createMfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
