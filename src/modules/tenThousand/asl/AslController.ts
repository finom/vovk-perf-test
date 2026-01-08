import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asl")
export default class AslController {
  @operation({
    summary: "Get Asl",
  })
  @get()
  static getAsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asl",
  })
  @post("{id}")
  static createAsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
