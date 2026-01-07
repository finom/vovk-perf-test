import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmd")
export default class JmdController {
  @operation({
    summary: "Get Jmd",
  })
  @get()
  static getJmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmd",
  })
  @post("{id}")
  static createJmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
