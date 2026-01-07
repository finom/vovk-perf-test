import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmy")
export default class JmyController {
  @operation({
    summary: "Get Jmy",
  })
  @get()
  static getJmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmy",
  })
  @post("{id}")
  static createJmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
