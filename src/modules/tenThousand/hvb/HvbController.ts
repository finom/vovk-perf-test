import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvb")
export default class HvbController {
  @operation({
    summary: "Get Hvb",
  })
  @get()
  static getHvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvb",
  })
  @post("{id}")
  static createHvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
