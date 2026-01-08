import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luq")
export default class LuqController {
  @operation({
    summary: "Get Luq",
  })
  @get()
  static getLuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luq",
  })
  @post("{id}")
  static createLuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
