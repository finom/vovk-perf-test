import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffs")
export default class FfsController {
  @operation({
    summary: "Get Ffs",
  })
  @get()
  static getFfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffs",
  })
  @post("{id}")
  static createFfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
