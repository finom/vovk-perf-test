import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boa")
export default class BoaController {
  @operation({
    summary: "Get Boa",
  })
  @get()
  static getBoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boa",
  })
  @post("{id}")
  static createBoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
