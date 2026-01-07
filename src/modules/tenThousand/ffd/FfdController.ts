import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffd")
export default class FfdController {
  @operation({
    summary: "Get Ffd",
  })
  @get()
  static getFfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffd",
  })
  @post("{id}")
  static createFfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
