import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvh")
export default class HvhController {
  @operation({
    summary: "Get Hvh",
  })
  @get()
  static getHvh = procedure({
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
