import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjo")
export default class FjoController {
  @operation({
    summary: "Get Fjo",
  })
  @get()
  static getFjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjo",
  })
  @post("{id}")
  static createFjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
