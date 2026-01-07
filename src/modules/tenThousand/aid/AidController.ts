import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aid")
export default class AidController {
  @operation({
    summary: "Get Aid",
  })
  @get()
  static getAid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aid",
  })
  @post("{id}")
  static createAid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
