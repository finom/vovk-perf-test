import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljy")
export default class LjyController {
  @operation({
    summary: "Get Ljy",
  })
  @get()
  static getLjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljy",
  })
  @post("{id}")
  static createLjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
