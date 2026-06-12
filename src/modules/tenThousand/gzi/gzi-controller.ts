import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzi")
export default class GziController {
  @operation({
    summary: "Get Gzi",
  })
  @get()
  static getGzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzi",
  })
  @post("{id}")
  static createGzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
