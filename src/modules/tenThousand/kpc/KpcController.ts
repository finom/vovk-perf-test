import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpc")
export default class KpcController {
  @operation({
    summary: "Get Kpc",
  })
  @get()
  static getKpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpc",
  })
  @post("{id}")
  static createKpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
