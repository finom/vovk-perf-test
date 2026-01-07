import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffh")
export default class FfhController {
  @operation({
    summary: "Get Ffh",
  })
  @get()
  static getFfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffh",
  })
  @post("{id}")
  static createFfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
