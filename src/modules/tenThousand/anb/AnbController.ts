import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anb")
export default class AnbController {
  @operation({
    summary: "Get Anb",
  })
  @get()
  static getAnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anb",
  })
  @post("{id}")
  static createAnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
