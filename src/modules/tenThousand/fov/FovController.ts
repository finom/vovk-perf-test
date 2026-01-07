import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fov")
export default class FovController {
  @operation({
    summary: "Get Fov",
  })
  @get()
  static getFov = procedure({
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
