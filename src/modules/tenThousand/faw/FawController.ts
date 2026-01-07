import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faw")
export default class FawController {
  @operation({
    summary: "Get Faw",
  })
  @get()
  static getFaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faw",
  })
  @post("{id}")
  static createFaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
