import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kel")
export default class KelController {
  @operation({
    summary: "Get Kel",
  })
  @get()
  static getKel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kel",
  })
  @post("{id}")
  static createKel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
