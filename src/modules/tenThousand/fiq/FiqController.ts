import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiq")
export default class FiqController {
  @operation({
    summary: "Get Fiq",
  })
  @get()
  static getFiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiq",
  })
  @post("{id}")
  static createFiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
