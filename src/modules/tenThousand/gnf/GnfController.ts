import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnf")
export default class GnfController {
  @operation({
    summary: "Get Gnf",
  })
  @get()
  static getGnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnf",
  })
  @post("{id}")
  static createGnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
