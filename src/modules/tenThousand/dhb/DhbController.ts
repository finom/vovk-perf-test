import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhbs")
export default class DhbController {
  @operation({
    summary: "Get Dhbs",
  })
  @get()
  static getDhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhb",
  })
  @post("{id}")
  static createDhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
