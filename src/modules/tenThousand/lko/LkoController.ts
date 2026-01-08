import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lko")
export default class LkoController {
  @operation({
    summary: "Get Lko",
  })
  @get()
  static getLko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lko",
  })
  @post("{id}")
  static createLko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
