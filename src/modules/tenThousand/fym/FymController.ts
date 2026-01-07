import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fym")
export default class FymController {
  @operation({
    summary: "Get Fym",
  })
  @get()
  static getFym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fym",
  })
  @post("{id}")
  static createFym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
