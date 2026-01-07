import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnx")
export default class CnxController {
  @operation({
    summary: "Get Cnx",
  })
  @get()
  static getCnx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnx",
  })
  @post("{id}")
  static createCnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
