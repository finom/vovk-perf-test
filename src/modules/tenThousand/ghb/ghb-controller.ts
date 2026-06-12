import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghb")
export default class GhbController {
  @operation({
    summary: "Get Ghb",
  })
  @get()
  static getGhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghb",
  })
  @post("{id}")
  static createGhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
