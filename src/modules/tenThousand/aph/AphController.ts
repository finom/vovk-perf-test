import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aph")
export default class AphController {
  @operation({
    summary: "Get Aph",
  })
  @get()
  static getAph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aph",
  })
  @post("{id}")
  static createAph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
