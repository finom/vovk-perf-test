import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fve")
export default class FveController {
  @operation({
    summary: "Get Fve",
  })
  @get()
  static getFve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fve",
  })
  @post("{id}")
  static createFve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
