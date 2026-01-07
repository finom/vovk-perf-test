import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fih")
export default class FihController {
  @operation({
    summary: "Get Fih",
  })
  @get()
  static getFih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fih",
  })
  @post("{id}")
  static createFih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
