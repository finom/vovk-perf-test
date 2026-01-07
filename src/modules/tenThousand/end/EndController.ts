import { procedure, prefix, get, post, operation } from "vovk";

@prefix("end")
export default class EndController {
  @operation({
    summary: "Get End",
  })
  @get()
  static getEnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create End",
  })
  @post("{id}")
  static createEnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
