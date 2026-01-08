import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klk")
export default class KlkController {
  @operation({
    summary: "Get Klk",
  })
  @get()
  static getKlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klk",
  })
  @post("{id}")
  static createKlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
