import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kai")
export default class KaiController {
  @operation({
    summary: "Get Kai",
  })
  @get()
  static getKai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kai",
  })
  @post("{id}")
  static createKai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
