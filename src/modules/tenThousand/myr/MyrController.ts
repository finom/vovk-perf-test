import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myr")
export default class MyrController {
  @operation({
    summary: "Get Myr",
  })
  @get()
  static getMyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myr",
  })
  @post("{id}")
  static createMyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
