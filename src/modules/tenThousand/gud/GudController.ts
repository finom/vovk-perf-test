import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gud")
export default class GudController {
  @operation({
    summary: "Get Gud",
  })
  @get()
  static getGud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gud",
  })
  @post("{id}")
  static createGud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
