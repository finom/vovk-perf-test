import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emq")
export default class EmqController {
  @operation({
    summary: "Get Emq",
  })
  @get()
  static getEmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emq",
  })
  @post("{id}")
  static createEmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
