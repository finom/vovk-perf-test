import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dey")
export default class DeyController {
  @operation({
    summary: "Get Dey",
  })
  @get()
  static getDey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dey",
  })
  @post("{id}")
  static createDey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
