import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myx")
export default class MyxController {
  @operation({
    summary: "Get Myx",
  })
  @get()
  static getMyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myx",
  })
  @post("{id}")
  static createMyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
