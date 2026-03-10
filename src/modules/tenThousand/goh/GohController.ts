import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goh")
export default class GohController {
  @operation({
    summary: "Get Goh",
  })
  @get()
  static getGoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goh",
  })
  @post("{id}")
  static createGoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
