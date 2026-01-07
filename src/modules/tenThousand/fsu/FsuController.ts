import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsu")
export default class FsuController {
  @operation({
    summary: "Get Fsu",
  })
  @get()
  static getFsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsu",
  })
  @post("{id}")
  static createFsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
