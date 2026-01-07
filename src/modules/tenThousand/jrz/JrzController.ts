import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrz")
export default class JrzController {
  @operation({
    summary: "Get Jrz",
  })
  @get()
  static getJrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrz",
  })
  @post("{id}")
  static createJrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
