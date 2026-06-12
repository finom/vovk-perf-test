import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joy")
export default class JoyController {
  @operation({
    summary: "Get Joy",
  })
  @get()
  static getJoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Joy",
  })
  @post("{id}")
  static createJoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
