import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evv")
export default class EvvController {
  @operation({
    summary: "Get Evv",
  })
  @get()
  static getEvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evv",
  })
  @post("{id}")
  static createEvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
