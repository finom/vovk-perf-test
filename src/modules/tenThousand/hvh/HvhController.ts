import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvhs")
export default class HvhController {
  @operation({
    summary: "Get Hvhs",
  })
  @get()
  static getHvhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvh",
  })
  @post("{id}")
  static createHvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
