import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msc")
export default class MscController {
  @operation({
    summary: "Get Msc",
  })
  @get()
  static getMsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msc",
  })
  @post("{id}")
  static createMsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
