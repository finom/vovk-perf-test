import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byt")
export default class BytController {
  @operation({
    summary: "Get Byt",
  })
  @get()
  static getByt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byt",
  })
  @post("{id}")
  static createByt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
