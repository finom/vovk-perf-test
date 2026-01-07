import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msv")
export default class MsvController {
  @operation({
    summary: "Get Msv",
  })
  @get()
  static getMsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msv",
  })
  @post("{id}")
  static createMsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
