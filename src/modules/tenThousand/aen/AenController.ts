import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aen")
export default class AenController {
  @operation({
    summary: "Get Aen",
  })
  @get()
  static getAen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aen",
  })
  @post("{id}")
  static createAen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
