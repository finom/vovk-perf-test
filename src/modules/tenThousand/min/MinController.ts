import { procedure, prefix, get, post, operation } from "vovk";

@prefix("min")
export default class MinController {
  @operation({
    summary: "Get Min",
  })
  @get()
  static getMin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Min",
  })
  @post("{id}")
  static createMin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
