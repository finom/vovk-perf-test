import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evk")
export default class EvkController {
  @operation({
    summary: "Get Evk",
  })
  @get()
  static getEvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evk",
  })
  @post("{id}")
  static createEvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
