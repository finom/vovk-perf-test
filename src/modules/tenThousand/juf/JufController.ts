import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juf")
export default class JufController {
  @operation({
    summary: "Get Juf",
  })
  @get()
  static getJuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juf",
  })
  @post("{id}")
  static createJuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
