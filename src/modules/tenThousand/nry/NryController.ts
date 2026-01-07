import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nry")
export default class NryController {
  @operation({
    summary: "Get Nry",
  })
  @get()
  static getNry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nry",
  })
  @post("{id}")
  static createNry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
