import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggo")
export default class GgoController {
  @operation({
    summary: "Get Ggo",
  })
  @get()
  static getGgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggo",
  })
  @post("{id}")
  static createGgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
