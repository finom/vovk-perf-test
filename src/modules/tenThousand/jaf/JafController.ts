import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaf")
export default class JafController {
  @operation({
    summary: "Get Jaf",
  })
  @get()
  static getJaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaf",
  })
  @post("{id}")
  static createJaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
