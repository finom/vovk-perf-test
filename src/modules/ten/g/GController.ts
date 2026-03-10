import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("g")
export default class GController {
  @operation({
    summary: "Get G",
  })
  @get()
  static getG = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create G",
  })
  @post("{id}")
  static createG = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
