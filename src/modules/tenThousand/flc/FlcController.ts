import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flc")
export default class FlcController {
  @operation({
    summary: "Get Flc",
  })
  @get()
  static getFlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flc",
  })
  @post("{id}")
  static createFlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
