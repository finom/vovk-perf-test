import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cu")
export default class CuController {
  @operation({
    summary: "Get Cu",
  })
  @get()
  static getCu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cu",
  })
  @post("{id}")
  static createCu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
