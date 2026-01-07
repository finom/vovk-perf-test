import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cro")
export default class CroController {
  @operation({
    summary: "Get Cro",
  })
  @get()
  static getCro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cro",
  })
  @post("{id}")
  static createCro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
