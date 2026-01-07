import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jee")
export default class JeeController {
  @operation({
    summary: "Get Jee",
  })
  @get()
  static getJee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jee",
  })
  @post("{id}")
  static createJee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
