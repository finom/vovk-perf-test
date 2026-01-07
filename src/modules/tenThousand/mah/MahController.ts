import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mah")
export default class MahController {
  @operation({
    summary: "Get Mah",
  })
  @get()
  static getMah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mah",
  })
  @post("{id}")
  static createMah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
