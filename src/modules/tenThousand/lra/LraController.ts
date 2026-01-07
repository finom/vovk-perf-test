import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lra")
export default class LraController {
  @operation({
    summary: "Get Lra",
  })
  @get()
  static getLra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lra",
  })
  @post("{id}")
  static createLra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
