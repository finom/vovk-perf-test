import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjl")
export default class MjlController {
  @operation({
    summary: "Get Mjl",
  })
  @get()
  static getMjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjl",
  })
  @post("{id}")
  static createMjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
