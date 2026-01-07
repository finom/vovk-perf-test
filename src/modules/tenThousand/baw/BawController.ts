import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baw")
export default class BawController {
  @operation({
    summary: "Get Baw",
  })
  @get()
  static getBaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baw",
  })
  @post("{id}")
  static createBaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
