import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loq")
export default class LoqController {
  @operation({
    summary: "Get Loq",
  })
  @get()
  static getLoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loq",
  })
  @post("{id}")
  static createLoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
