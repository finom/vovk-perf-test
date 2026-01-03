import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dohs")
export default class DohController {
  @operation({
    summary: "Get Dohs",
  })
  @get()
  static getDohs = procedure({
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
