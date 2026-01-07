import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asl")
export default class AslController {
  @operation({
    summary: "Get Asl",
  })
  @get()
  static getAsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asl",
  })
  @post("{id}")
  static createAsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
