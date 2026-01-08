import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npx")
export default class NpxController {
  @operation({
    summary: "Get Npx",
  })
  @get()
  static getNpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npx",
  })
  @post("{id}")
  static createNpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
