import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljh")
export default class LjhController {
  @operation({
    summary: "Get Ljh",
  })
  @get()
  static getLjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljh",
  })
  @post("{id}")
  static createLjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
