import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evh")
export default class EvhController {
  @operation({
    summary: "Get Evh",
  })
  @get()
  static getEvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evh",
  })
  @post("{id}")
  static createEvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
