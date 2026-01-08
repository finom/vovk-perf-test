import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrz")
export default class MrzController {
  @operation({
    summary: "Get Mrz",
  })
  @get()
  static getMrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrz",
  })
  @post("{id}")
  static createMrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
