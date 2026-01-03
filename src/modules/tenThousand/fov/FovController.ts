import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fovs")
export default class FovController {
  @operation({
    summary: "Get Fovs",
  })
  @get()
  static getFovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fov",
  })
  @post("{id}")
  static createFov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
