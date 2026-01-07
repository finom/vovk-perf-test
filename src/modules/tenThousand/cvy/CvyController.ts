import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvy")
export default class CvyController {
  @operation({
    summary: "Get Cvy",
  })
  @get()
  static getCvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvy",
  })
  @post("{id}")
  static createCvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
