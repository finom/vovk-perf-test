import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jry")
export default class JryController {
  @operation({
    summary: "Get Jry",
  })
  @get()
  static getJry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jry",
  })
  @post("{id}")
  static createJry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
