import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fau")
export default class FauController {
  @operation({
    summary: "Get Fau",
  })
  @get()
  static getFau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fau",
  })
  @post("{id}")
  static createFau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
