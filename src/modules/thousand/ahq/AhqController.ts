import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahq")
export default class AhqController {
  @operation({
    summary: "Get Ahq",
  })
  @get()
  static getAhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahq",
  })
  @post("{id}")
  static createAhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
