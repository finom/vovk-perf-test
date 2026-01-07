import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knk")
export default class KnkController {
  @operation({
    summary: "Get Knk",
  })
  @get()
  static getKnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knk",
  })
  @post("{id}")
  static createKnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
