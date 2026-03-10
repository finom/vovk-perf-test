import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gch")
export default class GchController {
  @operation({
    summary: "Get Gch",
  })
  @get()
  static getGch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gch",
  })
  @post("{id}")
  static createGch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
