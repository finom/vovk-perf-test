import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpi")
export default class JpiController {
  @operation({
    summary: "Get Jpi",
  })
  @get()
  static getJpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpi",
  })
  @post("{id}")
  static createJpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
