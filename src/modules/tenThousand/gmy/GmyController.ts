import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmy")
export default class GmyController {
  @operation({
    summary: "Get Gmy",
  })
  @get()
  static getGmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmy",
  })
  @post("{id}")
  static createGmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
