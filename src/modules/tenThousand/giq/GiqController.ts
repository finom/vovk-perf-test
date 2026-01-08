import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giq")
export default class GiqController {
  @operation({
    summary: "Get Giq",
  })
  @get()
  static getGiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giq",
  })
  @post("{id}")
  static createGiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
