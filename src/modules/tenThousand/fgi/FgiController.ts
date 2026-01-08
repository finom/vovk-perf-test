import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgi")
export default class FgiController {
  @operation({
    summary: "Get Fgi",
  })
  @get()
  static getFgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgi",
  })
  @post("{id}")
  static createFgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
