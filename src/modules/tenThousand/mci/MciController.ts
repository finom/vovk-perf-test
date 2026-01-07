import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mci")
export default class MciController {
  @operation({
    summary: "Get Mci",
  })
  @get()
  static getMci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mci",
  })
  @post("{id}")
  static createMci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
