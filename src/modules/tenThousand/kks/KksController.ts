import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kks")
export default class KksController {
  @operation({
    summary: "Get Kks",
  })
  @get()
  static getKks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kks",
  })
  @post("{id}")
  static createKks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
