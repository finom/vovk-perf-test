import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhr")
export default class JhrController {
  @operation({
    summary: "Get Jhr",
  })
  @get()
  static getJhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhr",
  })
  @post("{id}")
  static createJhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
