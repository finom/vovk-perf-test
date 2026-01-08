import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwh")
export default class GwhController {
  @operation({
    summary: "Get Gwh",
  })
  @get()
  static getGwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwh",
  })
  @post("{id}")
  static createGwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
