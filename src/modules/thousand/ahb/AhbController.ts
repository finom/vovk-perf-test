import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahb")
export default class AhbController {
  @operation({
    summary: "Get Ahb",
  })
  @get()
  static getAhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahb",
  })
  @post("{id}")
  static createAhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
