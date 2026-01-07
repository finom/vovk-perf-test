import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftu")
export default class FtuController {
  @operation({
    summary: "Get Ftu",
  })
  @get()
  static getFtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftu",
  })
  @post("{id}")
  static createFtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
