import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gta")
export default class GtaController {
  @operation({
    summary: "Get Gta",
  })
  @get()
  static getGta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gta",
  })
  @post("{id}")
  static createGta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
