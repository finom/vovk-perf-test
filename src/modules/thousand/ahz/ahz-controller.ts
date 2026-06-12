import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahz")
export default class AhzController {
  @operation({
    summary: "Get Ahz",
  })
  @get()
  static getAhz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahz",
  })
  @post("{id}")
  static createAhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
