import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frk")
export default class FrkController {
  @operation({
    summary: "Get Frk",
  })
  @get()
  static getFrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frk",
  })
  @post("{id}")
  static createFrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
