import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mph")
export default class MphController {
  @operation({
    summary: "Get Mph",
  })
  @get()
  static getMph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mph",
  })
  @post("{id}")
  static createMph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
