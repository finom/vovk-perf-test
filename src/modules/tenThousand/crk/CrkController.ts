import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crk")
export default class CrkController {
  @operation({
    summary: "Get Crk",
  })
  @get()
  static getCrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crk",
  })
  @post("{id}")
  static createCrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
