import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bft")
export default class BftController {
  @operation({
    summary: "Get Bft",
  })
  @get()
  static getBft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bft",
  })
  @post("{id}")
  static createBft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
