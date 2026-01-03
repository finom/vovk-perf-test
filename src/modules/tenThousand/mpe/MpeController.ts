import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpes")
export default class MpeController {
  @operation({
    summary: "Get Mpes",
  })
  @get()
  static getMpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpe",
  })
  @post("{id}")
  static createMpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
