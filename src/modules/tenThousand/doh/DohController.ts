import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doh")
export default class DohController {
  @operation({
    summary: "Get Doh",
  })
  @get()
  static getDoh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doh",
  })
  @post("{id}")
  static createDoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
