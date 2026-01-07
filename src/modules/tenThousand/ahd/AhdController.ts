import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahd")
export default class AhdController {
  @operation({
    summary: "Get Ahd",
  })
  @get()
  static getAhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahd",
  })
  @post("{id}")
  static createAhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
