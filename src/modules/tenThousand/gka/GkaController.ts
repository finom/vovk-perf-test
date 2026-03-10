import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gka")
export default class GkaController {
  @operation({
    summary: "Get Gka",
  })
  @get()
  static getGka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gka",
  })
  @post("{id}")
  static createGka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
