import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieys")
export default class IeyController {
  @operation({
    summary: "Get Ieys",
  })
  @get()
  static getIeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iey",
  })
  @post("{id}")
  static createIey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
