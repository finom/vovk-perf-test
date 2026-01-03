import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeys")
export default class JeyController {
  @operation({
    summary: "Get Jeys",
  })
  @get()
  static getJeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jey",
  })
  @post("{id}")
  static createJey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
