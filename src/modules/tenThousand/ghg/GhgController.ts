import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghg")
export default class GhgController {
  @operation({
    summary: "Get Ghg",
  })
  @get()
  static getGhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghg",
  })
  @post("{id}")
  static createGhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
