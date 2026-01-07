import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hih")
export default class HihController {
  @operation({
    summary: "Get Hih",
  })
  @get()
  static getHih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hih",
  })
  @post("{id}")
  static createHih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
