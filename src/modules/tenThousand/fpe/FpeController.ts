import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpes")
export default class FpeController {
  @operation({
    summary: "Get Fpes",
  })
  @get()
  static getFpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpe",
  })
  @post("{id}")
  static createFpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
