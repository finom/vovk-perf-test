import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noe")
export default class NoeController {
  @operation({
    summary: "Get Noe",
  })
  @get()
  static getNoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noe",
  })
  @post("{id}")
  static createNoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
