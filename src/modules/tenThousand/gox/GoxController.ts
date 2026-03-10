import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gox")
export default class GoxController {
  @operation({
    summary: "Get Gox",
  })
  @get()
  static getGox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gox",
  })
  @post("{id}")
  static createGox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
