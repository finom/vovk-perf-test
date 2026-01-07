import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzy")
export default class MzyController {
  @operation({
    summary: "Get Mzy",
  })
  @get()
  static getMzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzy",
  })
  @post("{id}")
  static createMzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
