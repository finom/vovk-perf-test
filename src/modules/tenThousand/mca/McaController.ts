import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mca")
export default class McaController {
  @operation({
    summary: "Get Mca",
  })
  @get()
  static getMca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mca",
  })
  @post("{id}")
  static createMca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
