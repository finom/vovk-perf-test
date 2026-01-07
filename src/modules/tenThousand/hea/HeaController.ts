import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hea")
export default class HeaController {
  @operation({
    summary: "Get Hea",
  })
  @get()
  static getHea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hea",
  })
  @post("{id}")
  static createHea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
