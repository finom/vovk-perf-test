import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjl")
export default class HjlController {
  @operation({
    summary: "Get Hjl",
  })
  @get()
  static getHjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjl",
  })
  @post("{id}")
  static createHjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
