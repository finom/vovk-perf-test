import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqu")
export default class LquController {
  @operation({
    summary: "Get Lqu",
  })
  @get()
  static getLqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqu",
  })
  @post("{id}")
  static createLqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
