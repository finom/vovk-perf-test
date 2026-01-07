import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdp")
export default class JdpController {
  @operation({
    summary: "Get Jdp",
  })
  @get()
  static getJdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdp",
  })
  @post("{id}")
  static createJdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
