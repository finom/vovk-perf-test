import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmjs")
export default class NmjController {
  @operation({
    summary: "Get Nmjs",
  })
  @get()
  static getNmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmj",
  })
  @post("{id}")
  static createNmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
