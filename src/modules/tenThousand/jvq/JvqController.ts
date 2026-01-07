import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvq")
export default class JvqController {
  @operation({
    summary: "Get Jvq",
  })
  @get()
  static getJvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvq",
  })
  @post("{id}")
  static createJvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
