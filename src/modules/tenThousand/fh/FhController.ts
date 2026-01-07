import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fh")
export default class FhController {
  @operation({
    summary: "Get Fh",
  })
  @get()
  static getFh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fh",
  })
  @post("{id}")
  static createFh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
