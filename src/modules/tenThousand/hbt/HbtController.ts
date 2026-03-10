import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbt")
export default class HbtController {
  @operation({
    summary: "Get Hbt",
  })
  @get()
  static getHbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbt",
  })
  @post("{id}")
  static createHbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
