import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaws")
export default class JawController {
  @operation({
    summary: "Get Jaws",
  })
  @get()
  static getJaws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaw",
  })
  @post("{id}")
  static createJaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
