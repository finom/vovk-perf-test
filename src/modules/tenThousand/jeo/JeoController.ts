import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeo")
export default class JeoController {
  @operation({
    summary: "Get Jeo",
  })
  @get()
  static getJeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeo",
  })
  @post("{id}")
  static createJeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
