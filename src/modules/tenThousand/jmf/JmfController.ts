import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmf")
export default class JmfController {
  @operation({
    summary: "Get Jmf",
  })
  @get()
  static getJmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmf",
  })
  @post("{id}")
  static createJmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
