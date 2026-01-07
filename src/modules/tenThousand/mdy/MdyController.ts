import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdy")
export default class MdyController {
  @operation({
    summary: "Get Mdy",
  })
  @get()
  static getMdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdy",
  })
  @post("{id}")
  static createMdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
