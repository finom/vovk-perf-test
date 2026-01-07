import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahw")
export default class AhwController {
  @operation({
    summary: "Get Ahw",
  })
  @get()
  static getAhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahw",
  })
  @post("{id}")
  static createAhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
