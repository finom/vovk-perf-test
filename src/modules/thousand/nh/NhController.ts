import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nh")
export default class NhController {
  @operation({
    summary: "Get Nh",
  })
  @get()
  static getNh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nh",
  })
  @post("{id}")
  static createNh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
