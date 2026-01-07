import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boi")
export default class BoiController {
  @operation({
    summary: "Get Boi",
  })
  @get()
  static getBoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boi",
  })
  @post("{id}")
  static createBoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
