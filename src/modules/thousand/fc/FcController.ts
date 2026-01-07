import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fc")
export default class FcController {
  @operation({
    summary: "Get Fc",
  })
  @get()
  static getFc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fc",
  })
  @post("{id}")
  static createFc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
