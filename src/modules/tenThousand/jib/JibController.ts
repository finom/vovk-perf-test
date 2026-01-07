import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jib")
export default class JibController {
  @operation({
    summary: "Get Jib",
  })
  @get()
  static getJib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jib",
  })
  @post("{id}")
  static createJib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
