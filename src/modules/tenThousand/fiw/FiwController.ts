import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiw")
export default class FiwController {
  @operation({
    summary: "Get Fiw",
  })
  @get()
  static getFiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiw",
  })
  @post("{id}")
  static createFiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
