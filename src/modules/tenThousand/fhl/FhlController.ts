import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhl")
export default class FhlController {
  @operation({
    summary: "Get Fhl",
  })
  @get()
  static getFhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhl",
  })
  @post("{id}")
  static createFhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
