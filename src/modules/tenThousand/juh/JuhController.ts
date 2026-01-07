import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juh")
export default class JuhController {
  @operation({
    summary: "Get Juh",
  })
  @get()
  static getJuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juh",
  })
  @post("{id}")
  static createJuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
