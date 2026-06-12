import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hle")
export default class HleController {
  @operation({
    summary: "Get Hle",
  })
  @get()
  static getHle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hle",
  })
  @post("{id}")
  static createHle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
