import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsk")
export default class FskController {
  @operation({
    summary: "Get Fsk",
  })
  @get()
  static getFsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsk",
  })
  @post("{id}")
  static createFsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
