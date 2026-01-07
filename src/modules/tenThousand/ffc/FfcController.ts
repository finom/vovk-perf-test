import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffc")
export default class FfcController {
  @operation({
    summary: "Get Ffc",
  })
  @get()
  static getFfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffc",
  })
  @post("{id}")
  static createFfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
