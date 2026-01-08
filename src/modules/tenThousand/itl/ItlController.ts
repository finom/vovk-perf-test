import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itl")
export default class ItlController {
  @operation({
    summary: "Get Itl",
  })
  @get()
  static getItl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itl",
  })
  @post("{id}")
  static createItl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
