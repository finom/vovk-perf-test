import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evt")
export default class EvtController {
  @operation({
    summary: "Get Evt",
  })
  @get()
  static getEvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evt",
  })
  @post("{id}")
  static createEvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
