import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpe")
export default class LpeController {
  @operation({
    summary: "Get Lpe",
  })
  @get()
  static getLpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpe",
  })
  @post("{id}")
  static createLpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
