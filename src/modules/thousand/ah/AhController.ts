import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ah")
export default class AhController {
  @operation({
    summary: "Get Ah",
  })
  @get()
  static getAh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ah",
  })
  @post("{id}")
  static createAh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
