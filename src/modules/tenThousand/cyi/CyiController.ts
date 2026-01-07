import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyi")
export default class CyiController {
  @operation({
    summary: "Get Cyi",
  })
  @get()
  static getCyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyi",
  })
  @post("{id}")
  static createCyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
