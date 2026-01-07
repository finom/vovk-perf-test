import { procedure, prefix, get, post, operation } from "vovk";

@prefix("s")
export default class SController {
  @operation({
    summary: "Get S",
  })
  @get()
  static getS = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create S",
  })
  @post("{id}")
  static createS = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
