import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luz")
export default class LuzController {
  @operation({
    summary: "Get Luz",
  })
  @get()
  static getLuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luz",
  })
  @post("{id}")
  static createLuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
