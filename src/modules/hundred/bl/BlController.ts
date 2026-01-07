import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bl")
export default class BlController {
  @operation({
    summary: "Get Bl",
  })
  @get()
  static getBl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bl",
  })
  @post("{id}")
  static createBl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
