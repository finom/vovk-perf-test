import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faw")
export default class FawController {
  @operation({
    summary: "Get Faw",
  })
  @get()
  static getFaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faw",
  })
  @post("{id}")
  static createFaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
