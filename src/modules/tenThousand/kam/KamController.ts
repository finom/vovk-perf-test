import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kam")
export default class KamController {
  @operation({
    summary: "Get Kam",
  })
  @get()
  static getKam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kam",
  })
  @post("{id}")
  static createKam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
