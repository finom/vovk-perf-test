import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fys")
export default class FysController {
  @operation({
    summary: "Get Fys",
  })
  @get()
  static getFys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fys",
  })
  @post("{id}")
  static createFys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
