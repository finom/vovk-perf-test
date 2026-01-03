import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fejs")
export default class FejController {
  @operation({
    summary: "Get Fejs",
  })
  @get()
  static getFejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fej",
  })
  @post("{id}")
  static createFej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
