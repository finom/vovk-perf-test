import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jries")
export default class JryController {
  @operation({
    summary: "Get Jries",
  })
  @get()
  static getJries = procedure({
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
