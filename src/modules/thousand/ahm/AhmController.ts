import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahm")
export default class AhmController {
  @operation({
    summary: "Get Ahm",
  })
  @get()
  static getAhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahm",
  })
  @post("{id}")
  static createAhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
