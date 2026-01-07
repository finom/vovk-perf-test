import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqf")
export default class NqfController {
  @operation({
    summary: "Get Nqf",
  })
  @get()
  static getNqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqf",
  })
  @post("{id}")
  static createNqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
