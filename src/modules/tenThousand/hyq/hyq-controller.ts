import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyq")
export default class HyqController {
  @operation({
    summary: "Get Hyq",
  })
  @get()
  static getHyq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyq",
  })
  @post("{id}")
  static createHyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
