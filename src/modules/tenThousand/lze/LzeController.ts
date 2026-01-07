import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lze")
export default class LzeController {
  @operation({
    summary: "Get Lze",
  })
  @get()
  static getLze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lze",
  })
  @post("{id}")
  static createLze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
