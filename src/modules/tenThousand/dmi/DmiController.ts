import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmi")
export default class DmiController {
  @operation({
    summary: "Get Dmi",
  })
  @get()
  static getDmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmi",
  })
  @post("{id}")
  static createDmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
