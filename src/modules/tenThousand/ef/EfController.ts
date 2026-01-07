import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ef")
export default class EfController {
  @operation({
    summary: "Get Ef",
  })
  @get()
  static getEf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ef",
  })
  @post("{id}")
  static createEf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
