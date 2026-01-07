import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdf")
export default class MdfController {
  @operation({
    summary: "Get Mdf",
  })
  @get()
  static getMdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdf",
  })
  @post("{id}")
  static createMdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
