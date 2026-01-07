import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fho")
export default class FhoController {
  @operation({
    summary: "Get Fho",
  })
  @get()
  static getFho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fho",
  })
  @post("{id}")
  static createFho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
