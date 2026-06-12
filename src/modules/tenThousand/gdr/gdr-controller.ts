import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdr")
export default class GdrController {
  @operation({
    summary: "Get Gdr",
  })
  @get()
  static getGdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdr",
  })
  @post("{id}")
  static createGdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
