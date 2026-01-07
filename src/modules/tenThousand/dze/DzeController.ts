import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dze")
export default class DzeController {
  @operation({
    summary: "Get Dze",
  })
  @get()
  static getDze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dze",
  })
  @post("{id}")
  static createDze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
