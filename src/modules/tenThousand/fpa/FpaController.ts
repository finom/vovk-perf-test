import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpa")
export default class FpaController {
  @operation({
    summary: "Get Fpa",
  })
  @get()
  static getFpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpa",
  })
  @post("{id}")
  static createFpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
