import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lah")
export default class LahController {
  @operation({
    summary: "Get Lah",
  })
  @get()
  static getLah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lah",
  })
  @post("{id}")
  static createLah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
