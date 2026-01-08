import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atc")
export default class AtcController {
  @operation({
    summary: "Get Atc",
  })
  @get()
  static getAtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atc",
  })
  @post("{id}")
  static createAtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
