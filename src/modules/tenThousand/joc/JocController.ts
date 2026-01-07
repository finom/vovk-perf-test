import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joc")
export default class JocController {
  @operation({
    summary: "Get Joc",
  })
  @get()
  static getJoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joc",
  })
  @post("{id}")
  static createJoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
