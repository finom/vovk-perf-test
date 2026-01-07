import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lal")
export default class LalController {
  @operation({
    summary: "Get Lal",
  })
  @get()
  static getLal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lal",
  })
  @post("{id}")
  static createLal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
