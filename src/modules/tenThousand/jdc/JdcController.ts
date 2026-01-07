import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdc")
export default class JdcController {
  @operation({
    summary: "Get Jdc",
  })
  @get()
  static getJdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdc",
  })
  @post("{id}")
  static createJdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
