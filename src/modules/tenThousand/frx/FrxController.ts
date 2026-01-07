import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frx")
export default class FrxController {
  @operation({
    summary: "Get Frx",
  })
  @get()
  static getFrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frx",
  })
  @post("{id}")
  static createFrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
