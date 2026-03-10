import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvp")
export default class HvpController {
  @operation({
    summary: "Get Hvp",
  })
  @get()
  static getHvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvp",
  })
  @post("{id}")
  static createHvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
