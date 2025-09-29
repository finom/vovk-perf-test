import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fovs")
export default class FovController {
  @operation({
    summary: "Get Fovs",
  })
  @get()
  static getFovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fov",
  })
  @post("{id}")
  static createFov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
