import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgl")
export default class LglController {
  @operation({
    summary: "Get Lgl",
  })
  @get()
  static getLgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgl",
  })
  @post("{id}")
  static createLgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
