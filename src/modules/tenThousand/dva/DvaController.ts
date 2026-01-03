import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvas")
export default class DvaController {
  @operation({
    summary: "Get Dvas",
  })
  @get()
  static getDvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dva",
  })
  @post("{id}")
  static createDva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
