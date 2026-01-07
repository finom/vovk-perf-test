import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hax")
export default class HaxController {
  @operation({
    summary: "Get Hax",
  })
  @get()
  static getHax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hax",
  })
  @post("{id}")
  static createHax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
