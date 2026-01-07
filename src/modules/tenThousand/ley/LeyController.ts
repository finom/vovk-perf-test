import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ley")
export default class LeyController {
  @operation({
    summary: "Get Ley",
  })
  @get()
  static getLey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ley",
  })
  @post("{id}")
  static createLey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
