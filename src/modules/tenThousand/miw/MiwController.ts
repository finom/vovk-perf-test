import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miw")
export default class MiwController {
  @operation({
    summary: "Get Miw",
  })
  @get()
  static getMiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miw",
  })
  @post("{id}")
  static createMiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
