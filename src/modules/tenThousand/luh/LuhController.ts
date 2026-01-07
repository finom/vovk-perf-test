import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luh")
export default class LuhController {
  @operation({
    summary: "Get Luh",
  })
  @get()
  static getLuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luh",
  })
  @post("{id}")
  static createLuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
