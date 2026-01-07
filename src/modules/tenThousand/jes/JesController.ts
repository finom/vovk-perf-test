import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jes")
export default class JesController {
  @operation({
    summary: "Get Jes",
  })
  @get()
  static getJes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jes",
  })
  @post("{id}")
  static createJes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
