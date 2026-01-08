import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzo")
export default class FzoController {
  @operation({
    summary: "Get Fzo",
  })
  @get()
  static getFzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzo",
  })
  @post("{id}")
  static createFzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
