import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyb")
export default class JybController {
  @operation({
    summary: "Get Jyb",
  })
  @get()
  static getJyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyb",
  })
  @post("{id}")
  static createJyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
