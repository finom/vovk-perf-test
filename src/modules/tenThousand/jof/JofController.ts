import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jof")
export default class JofController {
  @operation({
    summary: "Get Jof",
  })
  @get()
  static getJof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jof",
  })
  @post("{id}")
  static createJof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
