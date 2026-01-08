import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsp")
export default class BspController {
  @operation({
    summary: "Get Bsp",
  })
  @get()
  static getBsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsp",
  })
  @post("{id}")
  static createBsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
