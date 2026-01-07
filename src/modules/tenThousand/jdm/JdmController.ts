import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdm")
export default class JdmController {
  @operation({
    summary: "Get Jdm",
  })
  @get()
  static getJdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdm",
  })
  @post("{id}")
  static createJdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
