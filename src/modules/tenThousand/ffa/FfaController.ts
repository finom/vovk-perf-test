import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffa")
export default class FfaController {
  @operation({
    summary: "Get Ffa",
  })
  @get()
  static getFfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffa",
  })
  @post("{id}")
  static createFfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
