import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evf")
export default class EvfController {
  @operation({
    summary: "Get Evf",
  })
  @get()
  static getEvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evf",
  })
  @post("{id}")
  static createEvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
