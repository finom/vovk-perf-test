import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctf")
export default class CtfController {
  @operation({
    summary: "Get Ctf",
  })
  @get()
  static getCtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctf",
  })
  @post("{id}")
  static createCtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
