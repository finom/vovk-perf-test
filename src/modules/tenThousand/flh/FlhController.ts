import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flh")
export default class FlhController {
  @operation({
    summary: "Get Flh",
  })
  @get()
  static getFlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flh",
  })
  @post("{id}")
  static createFlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
