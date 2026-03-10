import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvl")
export default class HvlController {
  @operation({
    summary: "Get Hvl",
  })
  @get()
  static getHvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvl",
  })
  @post("{id}")
  static createHvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
