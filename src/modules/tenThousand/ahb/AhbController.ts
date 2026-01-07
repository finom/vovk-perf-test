import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahb")
export default class AhbController {
  @operation({
    summary: "Get Ahb",
  })
  @get()
  static getAhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahb",
  })
  @post("{id}")
  static createAhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
