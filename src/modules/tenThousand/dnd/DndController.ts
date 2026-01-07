import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnd")
export default class DndController {
  @operation({
    summary: "Get Dnd",
  })
  @get()
  static getDnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnd",
  })
  @post("{id}")
  static createDnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
