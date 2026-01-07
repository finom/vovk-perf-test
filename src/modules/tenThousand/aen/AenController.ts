import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aen")
export default class AenController {
  @operation({
    summary: "Get Aen",
  })
  @get()
  static getAen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aen",
  })
  @post("{id}")
  static createAen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
