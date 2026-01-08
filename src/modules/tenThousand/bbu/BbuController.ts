import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbu")
export default class BbuController {
  @operation({
    summary: "Get Bbu",
  })
  @get()
  static getBbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbu",
  })
  @post("{id}")
  static createBbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
