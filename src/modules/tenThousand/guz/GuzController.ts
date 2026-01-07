import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guz")
export default class GuzController {
  @operation({
    summary: "Get Guz",
  })
  @get()
  static getGuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guz",
  })
  @post("{id}")
  static createGuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
