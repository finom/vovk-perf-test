import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzn")
export default class BznController {
  @operation({
    summary: "Get Bzn",
  })
  @get()
  static getBzn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzn",
  })
  @post("{id}")
  static createBzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
