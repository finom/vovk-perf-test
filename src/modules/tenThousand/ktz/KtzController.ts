import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktz")
export default class KtzController {
  @operation({
    summary: "Get Ktz",
  })
  @get()
  static getKtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktz",
  })
  @post("{id}")
  static createKtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
