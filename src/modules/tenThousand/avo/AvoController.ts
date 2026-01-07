import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avo")
export default class AvoController {
  @operation({
    summary: "Get Avo",
  })
  @get()
  static getAvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avo",
  })
  @post("{id}")
  static createAvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
