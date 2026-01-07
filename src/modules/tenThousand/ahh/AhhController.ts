import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahh")
export default class AhhController {
  @operation({
    summary: "Get Ahh",
  })
  @get()
  static getAhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahh",
  })
  @post("{id}")
  static createAhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
