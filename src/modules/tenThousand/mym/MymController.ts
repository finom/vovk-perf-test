import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mym")
export default class MymController {
  @operation({
    summary: "Get Mym",
  })
  @get()
  static getMym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mym",
  })
  @post("{id}")
  static createMym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
