import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dva")
export default class DvaController {
  @operation({
    summary: "Get Dva",
  })
  @get()
  static getDva = procedure({
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
