import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drn")
export default class DrnController {
  @operation({
    summary: "Get Drn",
  })
  @get()
  static getDrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drn",
  })
  @post("{id}")
  static createDrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
