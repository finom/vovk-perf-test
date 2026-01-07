import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjq")
export default class MjqController {
  @operation({
    summary: "Get Mjq",
  })
  @get()
  static getMjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjq",
  })
  @post("{id}")
  static createMjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
