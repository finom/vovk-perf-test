import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fye")
export default class FyeController {
  @operation({
    summary: "Get Fye",
  })
  @get()
  static getFye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fye",
  })
  @post("{id}")
  static createFye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
