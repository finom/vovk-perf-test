import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjn")
export default class JjnController {
  @operation({
    summary: "Get Jjn",
  })
  @get()
  static getJjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjn",
  })
  @post("{id}")
  static createJjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
