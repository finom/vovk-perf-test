import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvs")
export default class JvsController {
  @operation({
    summary: "Get Jvs",
  })
  @get()
  static getJvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvs",
  })
  @post("{id}")
  static createJvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
