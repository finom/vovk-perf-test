import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pi")
export default class PiController {
  @operation({
    summary: "Get Pi",
  })
  @get()
  static getPi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pi",
  })
  @post("{id}")
  static createPi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
