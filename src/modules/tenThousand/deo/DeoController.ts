import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deo")
export default class DeoController {
  @operation({
    summary: "Get Deo",
  })
  @get()
  static getDeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deo",
  })
  @post("{id}")
  static createDeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
