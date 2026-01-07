import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaz")
export default class JazController {
  @operation({
    summary: "Get Jaz",
  })
  @get()
  static getJaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaz",
  })
  @post("{id}")
  static createJaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
