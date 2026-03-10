import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyl")
export default class GylController {
  @operation({
    summary: "Get Gyl",
  })
  @get()
  static getGyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyl",
  })
  @post("{id}")
  static createGyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
