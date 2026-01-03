import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cams")
export default class CamController {
  @operation({
    summary: "Get Cams",
  })
  @get()
  static getCams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cam",
  })
  @post("{id}")
  static createCam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
