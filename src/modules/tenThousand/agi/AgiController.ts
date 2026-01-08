import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agi")
export default class AgiController {
  @operation({
    summary: "Get Agi",
  })
  @get()
  static getAgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agi",
  })
  @post("{id}")
  static createAgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
