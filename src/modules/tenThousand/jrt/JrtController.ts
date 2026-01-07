import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrt")
export default class JrtController {
  @operation({
    summary: "Get Jrt",
  })
  @get()
  static getJrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrt",
  })
  @post("{id}")
  static createJrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
