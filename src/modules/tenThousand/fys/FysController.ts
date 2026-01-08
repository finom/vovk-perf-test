import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fys")
export default class FysController {
  @operation({
    summary: "Get Fys",
  })
  @get()
  static getFys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fys",
  })
  @post("{id}")
  static createFys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
