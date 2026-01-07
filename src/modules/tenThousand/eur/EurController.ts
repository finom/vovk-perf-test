import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eur")
export default class EurController {
  @operation({
    summary: "Get Eur",
  })
  @get()
  static getEur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eur",
  })
  @post("{id}")
  static createEur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
