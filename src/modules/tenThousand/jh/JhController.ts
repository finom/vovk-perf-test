import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jh")
export default class JhController {
  @operation({
    summary: "Get Jh",
  })
  @get()
  static getJh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jh",
  })
  @post("{id}")
  static createJh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
