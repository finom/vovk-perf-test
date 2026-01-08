import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqb")
export default class AqbController {
  @operation({
    summary: "Get Aqb",
  })
  @get()
  static getAqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqb",
  })
  @post("{id}")
  static createAqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
