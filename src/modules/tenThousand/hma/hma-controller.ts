import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hma")
export default class HmaController {
  @operation({
    summary: "Get Hma",
  })
  @get()
  static getHma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hma",
  })
  @post("{id}")
  static createHma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
