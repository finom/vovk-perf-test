import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmn")
export default class DmnController {
  @operation({
    summary: "Get Dmn",
  })
  @get()
  static getDmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmn",
  })
  @post("{id}")
  static createDmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
