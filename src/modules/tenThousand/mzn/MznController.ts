import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzn")
export default class MznController {
  @operation({
    summary: "Get Mzn",
  })
  @get()
  static getMzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzn",
  })
  @post("{id}")
  static createMzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
