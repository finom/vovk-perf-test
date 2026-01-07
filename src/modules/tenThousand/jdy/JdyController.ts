import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdy")
export default class JdyController {
  @operation({
    summary: "Get Jdy",
  })
  @get()
  static getJdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdy",
  })
  @post("{id}")
  static createJdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
