import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drk")
export default class DrkController {
  @operation({
    summary: "Get Drk",
  })
  @get()
  static getDrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drk",
  })
  @post("{id}")
  static createDrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
