import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jue")
export default class JueController {
  @operation({
    summary: "Get Jue",
  })
  @get()
  static getJue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jue",
  })
  @post("{id}")
  static createJue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
