import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kog")
export default class KogController {
  @operation({
    summary: "Get Kog",
  })
  @get()
  static getKog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kog",
  })
  @post("{id}")
  static createKog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
