import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjh")
export default class MjhController {
  @operation({
    summary: "Get Mjh",
  })
  @get()
  static getMjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjh",
  })
  @post("{id}")
  static createMjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
