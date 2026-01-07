import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtp")
export default class JtpController {
  @operation({
    summary: "Get Jtp",
  })
  @get()
  static getJtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtp",
  })
  @post("{id}")
  static createJtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
