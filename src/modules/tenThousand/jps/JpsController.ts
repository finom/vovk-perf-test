import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jps")
export default class JpsController {
  @operation({
    summary: "Get Jps",
  })
  @get()
  static getJps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jps",
  })
  @post("{id}")
  static createJps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
