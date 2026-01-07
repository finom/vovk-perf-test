import { procedure, prefix, get, post, operation } from "vovk";

@prefix("g")
export default class GController {
  @operation({
    summary: "Get G",
  })
  @get()
  static getG = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create G",
  })
  @post("{id}")
  static createG = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
