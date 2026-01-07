import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euq")
export default class EuqController {
  @operation({
    summary: "Get Euq",
  })
  @get()
  static getEuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euq",
  })
  @post("{id}")
  static createEuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
