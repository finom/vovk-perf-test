import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjr")
export default class HjrController {
  @operation({
    summary: "Get Hjr",
  })
  @get()
  static getHjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjr",
  })
  @post("{id}")
  static createHjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
