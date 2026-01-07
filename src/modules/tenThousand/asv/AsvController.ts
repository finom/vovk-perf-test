import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asv")
export default class AsvController {
  @operation({
    summary: "Get Asv",
  })
  @get()
  static getAsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asv",
  })
  @post("{id}")
  static createAsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
