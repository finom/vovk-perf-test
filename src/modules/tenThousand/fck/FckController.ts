import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fck")
export default class FckController {
  @operation({
    summary: "Get Fck",
  })
  @get()
  static getFck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fck",
  })
  @post("{id}")
  static createFck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
