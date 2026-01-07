import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckt")
export default class CktController {
  @operation({
    summary: "Get Ckt",
  })
  @get()
  static getCkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckt",
  })
  @post("{id}")
  static createCkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
