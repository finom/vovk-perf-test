import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjd")
export default class MjdController {
  @operation({
    summary: "Get Mjd",
  })
  @get()
  static getMjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjd",
  })
  @post("{id}")
  static createMjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
