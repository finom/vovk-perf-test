import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aim")
export default class AimController {
  @operation({
    summary: "Get Aim",
  })
  @get()
  static getAim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aim",
  })
  @post("{id}")
  static createAim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
