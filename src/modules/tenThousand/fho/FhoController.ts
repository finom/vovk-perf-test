import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fho")
export default class FhoController {
  @operation({
    summary: "Get Fho",
  })
  @get()
  static getFho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fho",
  })
  @post("{id}")
  static createFho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
