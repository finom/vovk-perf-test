import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ain")
export default class AinController {
  @operation({
    summary: "Get Ain",
  })
  @get()
  static getAin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ain",
  })
  @post("{id}")
  static createAin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
