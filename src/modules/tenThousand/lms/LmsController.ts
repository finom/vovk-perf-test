import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lms")
export default class LmsController {
  @operation({
    summary: "Get Lms",
  })
  @get()
  static getLms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lms",
  })
  @post("{id}")
  static createLms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
