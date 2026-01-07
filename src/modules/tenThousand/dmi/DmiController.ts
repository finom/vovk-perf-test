import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmi")
export default class DmiController {
  @operation({
    summary: "Get Dmi",
  })
  @get()
  static getDmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmi",
  })
  @post("{id}")
  static createDmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
