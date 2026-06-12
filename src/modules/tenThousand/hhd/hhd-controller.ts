import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhd")
export default class HhdController {
  @operation({
    summary: "Get Hhd",
  })
  @get()
  static getHhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhd",
  })
  @post("{id}")
  static createHhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
