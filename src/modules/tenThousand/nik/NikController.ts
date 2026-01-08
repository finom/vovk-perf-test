import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nik")
export default class NikController {
  @operation({
    summary: "Get Nik",
  })
  @get()
  static getNik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nik",
  })
  @post("{id}")
  static createNik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
