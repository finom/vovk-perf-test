import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aam")
export default class AamController {
  @operation({
    summary: "Get Aam",
  })
  @get()
  static getAam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aam",
  })
  @post("{id}")
  static createAam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
