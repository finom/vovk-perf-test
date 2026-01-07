import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfd")
export default class JfdController {
  @operation({
    summary: "Get Jfd",
  })
  @get()
  static getJfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfd",
  })
  @post("{id}")
  static createJfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
