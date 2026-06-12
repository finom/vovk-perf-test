import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghx")
export default class GhxController {
  @operation({
    summary: "Get Ghx",
  })
  @get()
  static getGhx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghx",
  })
  @post("{id}")
  static createGhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
