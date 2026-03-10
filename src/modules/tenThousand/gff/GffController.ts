import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gff")
export default class GffController {
  @operation({
    summary: "Get Gff",
  })
  @get()
  static getGff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gff",
  })
  @post("{id}")
  static createGff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
