import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agy")
export default class AgyController {
  @operation({
    summary: "Get Agy",
  })
  @get()
  static getAgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agy",
  })
  @post("{id}")
  static createAgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
