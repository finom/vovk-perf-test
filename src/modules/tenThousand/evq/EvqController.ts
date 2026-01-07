import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evq")
export default class EvqController {
  @operation({
    summary: "Get Evq",
  })
  @get()
  static getEvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evq",
  })
  @post("{id}")
  static createEvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
