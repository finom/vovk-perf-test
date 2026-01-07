import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ev")
export default class EvController {
  @operation({
    summary: "Get Ev",
  })
  @get()
  static getEv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ev",
  })
  @post("{id}")
  static createEv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
