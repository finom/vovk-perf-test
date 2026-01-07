import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dah")
export default class DahController {
  @operation({
    summary: "Get Dah",
  })
  @get()
  static getDah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dah",
  })
  @post("{id}")
  static createDah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
