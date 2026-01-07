import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljc")
export default class LjcController {
  @operation({
    summary: "Get Ljc",
  })
  @get()
  static getLjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljc",
  })
  @post("{id}")
  static createLjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
