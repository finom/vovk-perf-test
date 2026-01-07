import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muh")
export default class MuhController {
  @operation({
    summary: "Get Muh",
  })
  @get()
  static getMuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muh",
  })
  @post("{id}")
  static createMuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
