import { procedure, prefix, get, post, operation } from "vovk";

@prefix("act")
export default class ActController {
  @operation({
    summary: "Get Act",
  })
  @get()
  static getAct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Act",
  })
  @post("{id}")
  static createAct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
