import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljn")
export default class LjnController {
  @operation({
    summary: "Get Ljn",
  })
  @get()
  static getLjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljn",
  })
  @post("{id}")
  static createLjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
