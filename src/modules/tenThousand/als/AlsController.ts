import { procedure, prefix, get, post, operation } from "vovk";

@prefix("als")
export default class AlsController {
  @operation({
    summary: "Get Als",
  })
  @get()
  static getAls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Als",
  })
  @post("{id}")
  static createAls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
