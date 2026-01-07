import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjr")
export default class JjrController {
  @operation({
    summary: "Get Jjr",
  })
  @get()
  static getJjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjr",
  })
  @post("{id}")
  static createJjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
