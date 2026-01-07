import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvf")
export default class JvfController {
  @operation({
    summary: "Get Jvf",
  })
  @get()
  static getJvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvf",
  })
  @post("{id}")
  static createJvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
