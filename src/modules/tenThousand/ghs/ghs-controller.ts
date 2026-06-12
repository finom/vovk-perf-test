import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghs")
export default class GhsController {
  @operation({
    summary: "Get Ghs",
  })
  @get()
  static getGhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghs",
  })
  @post("{id}")
  static createGhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
