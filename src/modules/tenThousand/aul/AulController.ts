import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aul")
export default class AulController {
  @operation({
    summary: "Get Aul",
  })
  @get()
  static getAul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aul",
  })
  @post("{id}")
  static createAul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
