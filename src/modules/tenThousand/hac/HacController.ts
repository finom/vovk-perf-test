import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hac")
export default class HacController {
  @operation({
    summary: "Get Hac",
  })
  @get()
  static getHac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hac",
  })
  @post("{id}")
  static createHac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
