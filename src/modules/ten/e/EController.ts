import { procedure, prefix, get, post, operation } from "vovk";

@prefix("e")
export default class EController {
  @operation({
    summary: "Get E",
  })
  @get()
  static getE = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create E",
  })
  @post("{id}")
  static createE = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
