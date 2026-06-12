import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahi")
export default class AhiController {
  @operation({
    summary: "Get Ahi",
  })
  @get()
  static getAhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahi",
  })
  @post("{id}")
  static createAhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
