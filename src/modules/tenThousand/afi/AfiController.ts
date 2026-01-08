import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afi")
export default class AfiController {
  @operation({
    summary: "Get Afi",
  })
  @get()
  static getAfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afi",
  })
  @post("{id}")
  static createAfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
