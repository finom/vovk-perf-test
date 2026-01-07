import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hga")
export default class HgaController {
  @operation({
    summary: "Get Hga",
  })
  @get()
  static getHga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hga",
  })
  @post("{id}")
  static createHga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
