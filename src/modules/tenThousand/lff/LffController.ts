import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lff")
export default class LffController {
  @operation({
    summary: "Get Lff",
  })
  @get()
  static getLff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lff",
  })
  @post("{id}")
  static createLff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
