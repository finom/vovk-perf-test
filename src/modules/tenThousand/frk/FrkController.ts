import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frk")
export default class FrkController {
  @operation({
    summary: "Get Frk",
  })
  @get()
  static getFrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frk",
  })
  @post("{id}")
  static createFrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
