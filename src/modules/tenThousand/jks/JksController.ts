import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jks")
export default class JksController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jks",
  })
  @post("{id}")
  static createJks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
