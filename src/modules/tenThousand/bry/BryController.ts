import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bry")
export default class BryController {
  @operation({
    summary: "Get Bry",
  })
  @get()
  static getBry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bry",
  })
  @post("{id}")
  static createBry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
