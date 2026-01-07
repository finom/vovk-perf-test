import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtr")
export default class MtrController {
  @operation({
    summary: "Get Mtr",
  })
  @get()
  static getMtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtr",
  })
  @post("{id}")
  static createMtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
