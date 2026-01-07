import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juo")
export default class JuoController {
  @operation({
    summary: "Get Juo",
  })
  @get()
  static getJuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juo",
  })
  @post("{id}")
  static createJuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
