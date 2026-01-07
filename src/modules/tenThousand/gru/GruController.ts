import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gru")
export default class GruController {
  @operation({
    summary: "Get Gru",
  })
  @get()
  static getGru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gru",
  })
  @post("{id}")
  static createGru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
