import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evr")
export default class EvrController {
  @operation({
    summary: "Get Evr",
  })
  @get()
  static getEvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evr",
  })
  @post("{id}")
  static createEvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
