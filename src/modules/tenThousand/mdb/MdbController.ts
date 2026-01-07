import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdb")
export default class MdbController {
  @operation({
    summary: "Get Mdb",
  })
  @get()
  static getMdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdb",
  })
  @post("{id}")
  static createMdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
