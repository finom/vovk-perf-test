import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njh")
export default class NjhController {
  @operation({
    summary: "Get Njh",
  })
  @get()
  static getNjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njh",
  })
  @post("{id}")
  static createNjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
