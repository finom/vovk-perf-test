import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdu")
export default class GduController {
  @operation({
    summary: "Get Gdu",
  })
  @get()
  static getGdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdu",
  })
  @post("{id}")
  static createGdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
