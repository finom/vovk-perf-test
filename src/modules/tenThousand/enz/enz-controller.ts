import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enz")
export default class EnzController {
  @operation({
    summary: "Get Enz",
  })
  @get()
  static getEnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enz",
  })
  @post("{id}")
  static createEnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
