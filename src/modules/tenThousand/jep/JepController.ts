import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jep")
export default class JepController {
  @operation({
    summary: "Get Jep",
  })
  @get()
  static getJep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jep",
  })
  @post("{id}")
  static createJep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
