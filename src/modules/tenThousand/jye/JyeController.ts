import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jye")
export default class JyeController {
  @operation({
    summary: "Get Jye",
  })
  @get()
  static getJye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jye",
  })
  @post("{id}")
  static createJye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
