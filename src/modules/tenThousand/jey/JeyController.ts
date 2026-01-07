import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jey")
export default class JeyController {
  @operation({
    summary: "Get Jey",
  })
  @get()
  static getJey = procedure({
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
