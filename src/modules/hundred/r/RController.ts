import { procedure, prefix, get, post, operation } from "vovk";

@prefix("r")
export default class RController {
  @operation({
    summary: "Get R",
  })
  @get()
  static getR = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create R",
  })
  @post("{id}")
  static createR = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
