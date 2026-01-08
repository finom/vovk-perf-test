import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsd")
export default class BsdController {
  @operation({
    summary: "Get Bsd",
  })
  @get()
  static getBsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsd",
  })
  @post("{id}")
  static createBsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
