import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvx")
export default class HvxController {
  @operation({
    summary: "Get Hvx",
  })
  @get()
  static getHvx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvx",
  })
  @post("{id}")
  static createHvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
