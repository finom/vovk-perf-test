import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gga")
export default class GgaController {
  @operation({
    summary: "Get Gga",
  })
  @get()
  static getGga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gga",
  })
  @post("{id}")
  static createGga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
