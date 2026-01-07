import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blj")
export default class BljController {
  @operation({
    summary: "Get Blj",
  })
  @get()
  static getBlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blj",
  })
  @post("{id}")
  static createBlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
