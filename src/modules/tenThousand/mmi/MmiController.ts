import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmi")
export default class MmiController {
  @operation({
    summary: "Get Mmi",
  })
  @get()
  static getMmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmi",
  })
  @post("{id}")
  static createMmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
