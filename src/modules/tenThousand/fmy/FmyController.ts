import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmy")
export default class FmyController {
  @operation({
    summary: "Get Fmy",
  })
  @get()
  static getFmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmy",
  })
  @post("{id}")
  static createFmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
