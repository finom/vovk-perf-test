import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dax")
export default class DaxController {
  @operation({
    summary: "Get Dax",
  })
  @get()
  static getDax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dax",
  })
  @post("{id}")
  static createDax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
