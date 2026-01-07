import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hta")
export default class HtaController {
  @operation({
    summary: "Get Hta",
  })
  @get()
  static getHta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hta",
  })
  @post("{id}")
  static createHta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
