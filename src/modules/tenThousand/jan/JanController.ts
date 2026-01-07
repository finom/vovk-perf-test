import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jan")
export default class JanController {
  @operation({
    summary: "Get Jan",
  })
  @get()
  static getJan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jan",
  })
  @post("{id}")
  static createJan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
