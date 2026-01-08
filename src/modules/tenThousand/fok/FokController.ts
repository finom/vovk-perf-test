import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fok")
export default class FokController {
  @operation({
    summary: "Get Fok",
  })
  @get()
  static getFok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fok",
  })
  @post("{id}")
  static createFok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
