import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mve")
export default class MveController {
  @operation({
    summary: "Get Mve",
  })
  @get()
  static getMve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mve",
  })
  @post("{id}")
  static createMve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
