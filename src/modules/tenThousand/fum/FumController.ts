import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fum")
export default class FumController {
  @operation({
    summary: "Get Fum",
  })
  @get()
  static getFum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fum",
  })
  @post("{id}")
  static createFum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
