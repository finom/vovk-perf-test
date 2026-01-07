import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pl")
export default class PlController {
  @operation({
    summary: "Get Pl",
  })
  @get()
  static getPl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pl",
  })
  @post("{id}")
  static createPl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
