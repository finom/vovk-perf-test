import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egi")
export default class EgiController {
  @operation({
    summary: "Get Egi",
  })
  @get()
  static getEgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egi",
  })
  @post("{id}")
  static createEgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
