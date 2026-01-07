import { procedure, prefix, get, post, operation } from "vovk";

@prefix("low")
export default class LowController {
  @operation({
    summary: "Get Low",
  })
  @get()
  static getLow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Low",
  })
  @post("{id}")
  static createLow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
