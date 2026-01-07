import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kan")
export default class KanController {
  @operation({
    summary: "Get Kan",
  })
  @get()
  static getKan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kan",
  })
  @post("{id}")
  static createKan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
