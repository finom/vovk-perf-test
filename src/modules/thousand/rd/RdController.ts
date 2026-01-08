import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rd")
export default class RdController {
  @operation({
    summary: "Get Rd",
  })
  @get()
  static getRd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rd",
  })
  @post("{id}")
  static createRd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
