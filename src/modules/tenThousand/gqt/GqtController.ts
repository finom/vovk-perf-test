import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqt")
export default class GqtController {
  @operation({
    summary: "Get Gqt",
  })
  @get()
  static getGqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqt",
  })
  @post("{id}")
  static createGqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
