import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpe")
export default class MpeController {
  @operation({
    summary: "Get Mpe",
  })
  @get()
  static getMpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpe",
  })
  @post("{id}")
  static createMpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
