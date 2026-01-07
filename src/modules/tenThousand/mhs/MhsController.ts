import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhs")
export default class MhsController {
  @operation({
    summary: "Get Mhs",
  })
  @get()
  static getMhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhs",
  })
  @post("{id}")
  static createMhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
