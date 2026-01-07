import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lec")
export default class LecController {
  @operation({
    summary: "Get Lec",
  })
  @get()
  static getLec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lec",
  })
  @post("{id}")
  static createLec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
