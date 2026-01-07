import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrb")
export default class JrbController {
  @operation({
    summary: "Get Jrb",
  })
  @get()
  static getJrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrb",
  })
  @post("{id}")
  static createJrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
