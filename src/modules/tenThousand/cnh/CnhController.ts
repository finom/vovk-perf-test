import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnhs")
export default class CnhController {
  @operation({
    summary: "Get Cnhs",
  })
  @get()
  static getCnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnh",
  })
  @post("{id}")
  static createCnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
