import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyxes")
export default class GyxController {
  @operation({
    summary: "Get Gyxes",
  })
  @get()
  static getGyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyx",
  })
  @post("{id}")
  static createGyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
