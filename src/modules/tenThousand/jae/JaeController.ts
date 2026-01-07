import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jae")
export default class JaeController {
  @operation({
    summary: "Get Jae",
  })
  @get()
  static getJae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jae",
  })
  @post("{id}")
  static createJae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
