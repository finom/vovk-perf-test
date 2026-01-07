import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evb")
export default class EvbController {
  @operation({
    summary: "Get Evb",
  })
  @get()
  static getEvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evb",
  })
  @post("{id}")
  static createEvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
