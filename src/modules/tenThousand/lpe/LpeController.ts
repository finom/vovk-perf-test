import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpe")
export default class LpeController {
  @operation({
    summary: "Get Lpe",
  })
  @get()
  static getLpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpe",
  })
  @post("{id}")
  static createLpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
