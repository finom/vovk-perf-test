import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huo")
export default class HuoController {
  @operation({
    summary: "Get Huo",
  })
  @get()
  static getHuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huo",
  })
  @post("{id}")
  static createHuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
