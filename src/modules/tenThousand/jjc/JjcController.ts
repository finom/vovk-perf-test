import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjc")
export default class JjcController {
  @operation({
    summary: "Get Jjc",
  })
  @get()
  static getJjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjc",
  })
  @post("{id}")
  static createJjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
