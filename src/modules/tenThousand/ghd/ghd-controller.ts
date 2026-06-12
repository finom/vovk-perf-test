import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghd")
export default class GhdController {
  @operation({
    summary: "Get Ghd",
  })
  @get()
  static getGhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghd",
  })
  @post("{id}")
  static createGhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
