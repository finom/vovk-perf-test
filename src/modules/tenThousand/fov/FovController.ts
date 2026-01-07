import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fov")
export default class FovController {
  @operation({
    summary: "Get Fov",
  })
  @get()
  static getFov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fov",
  })
  @post("{id}")
  static createFov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
