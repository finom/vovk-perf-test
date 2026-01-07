import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjc")
export default class MjcController {
  @operation({
    summary: "Get Mjc",
  })
  @get()
  static getMjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjc",
  })
  @post("{id}")
  static createMjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
