import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpc")
export default class JpcController {
  @operation({
    summary: "Get Jpc",
  })
  @get()
  static getJpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpc",
  })
  @post("{id}")
  static createJpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
