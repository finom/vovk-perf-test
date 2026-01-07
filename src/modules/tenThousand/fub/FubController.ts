import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fub")
export default class FubController {
  @operation({
    summary: "Get Fub",
  })
  @get()
  static getFub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fub",
  })
  @post("{id}")
  static createFub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
