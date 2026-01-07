import { procedure, prefix, get, post, operation } from "vovk";

@prefix("att")
export default class AttController {
  @operation({
    summary: "Get Att",
  })
  @get()
  static getAtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Att",
  })
  @post("{id}")
  static createAtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
