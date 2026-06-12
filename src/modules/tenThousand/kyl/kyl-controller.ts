import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyl")
export default class KylController {
  @operation({
    summary: "Get Kyl",
  })
  @get()
  static getKyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyl",
  })
  @post("{id}")
  static createKyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
