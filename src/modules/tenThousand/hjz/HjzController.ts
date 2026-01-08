import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjz")
export default class HjzController {
  @operation({
    summary: "Get Hjz",
  })
  @get()
  static getHjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjz",
  })
  @post("{id}")
  static createHjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
