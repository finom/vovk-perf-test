import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbi")
export default class FbiController {
  @operation({
    summary: "Get Fbi",
  })
  @get()
  static getFbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbi",
  })
  @post("{id}")
  static createFbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
