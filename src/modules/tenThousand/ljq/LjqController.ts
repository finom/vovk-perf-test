import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljq")
export default class LjqController {
  @operation({
    summary: "Get Ljq",
  })
  @get()
  static getLjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljq",
  })
  @post("{id}")
  static createLjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
