import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fro")
export default class FroController {
  @operation({
    summary: "Get Fro",
  })
  @get()
  static getFro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fro",
  })
  @post("{id}")
  static createFro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
