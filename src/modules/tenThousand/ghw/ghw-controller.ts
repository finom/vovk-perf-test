import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghw")
export default class GhwController {
  @operation({
    summary: "Get Ghw",
  })
  @get()
  static getGhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghw",
  })
  @post("{id}")
  static createGhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
