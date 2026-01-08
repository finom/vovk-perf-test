import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gze")
export default class GzeController {
  @operation({
    summary: "Get Gze",
  })
  @get()
  static getGze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gze",
  })
  @post("{id}")
  static createGze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
