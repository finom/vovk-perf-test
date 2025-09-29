import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cams")
export default class CamController {
  @operation({
    summary: "Get Cams",
  })
  @get()
  static getCams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cam",
  })
  @post("{id}")
  static createCam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
