import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imy")
export default class ImyController {
  @operation({
    summary: "Get Imy",
  })
  @get()
  static getImy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imy",
  })
  @post("{id}")
  static createImy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
