import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyx")
export default class JyxController {
  @operation({
    summary: "Get Jyx",
  })
  @get()
  static getJyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyx",
  })
  @post("{id}")
  static createJyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
