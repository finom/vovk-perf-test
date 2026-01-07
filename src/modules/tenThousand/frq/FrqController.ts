import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frq")
export default class FrqController {
  @operation({
    summary: "Get Frq",
  })
  @get()
  static getFrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frq",
  })
  @post("{id}")
  static createFrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
