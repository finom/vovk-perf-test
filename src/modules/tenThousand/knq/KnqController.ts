import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knq")
export default class KnqController {
  @operation({
    summary: "Get Knq",
  })
  @get()
  static getKnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knq",
  })
  @post("{id}")
  static createKnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
