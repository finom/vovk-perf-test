import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hps")
export default class HpsController {
  @operation({
    summary: "Get Hps",
  })
  @get()
  static getHps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hps",
  })
  @post("{id}")
  static createHps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
