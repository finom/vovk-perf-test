import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frd")
export default class FrdController {
  @operation({
    summary: "Get Frd",
  })
  @get()
  static getFrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frd",
  })
  @post("{id}")
  static createFrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
