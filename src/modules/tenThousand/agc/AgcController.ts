import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agc")
export default class AgcController {
  @operation({
    summary: "Get Agc",
  })
  @get()
  static getAgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agc",
  })
  @post("{id}")
  static createAgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
