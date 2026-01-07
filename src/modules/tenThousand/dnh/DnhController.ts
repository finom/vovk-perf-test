import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnh")
export default class DnhController {
  @operation({
    summary: "Get Dnh",
  })
  @get()
  static getDnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnh",
  })
  @post("{id}")
  static createDnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
