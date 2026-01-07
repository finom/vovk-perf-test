import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqz")
export default class NqzController {
  @operation({
    summary: "Get Nqz",
  })
  @get()
  static getNqz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqz",
  })
  @post("{id}")
  static createNqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
