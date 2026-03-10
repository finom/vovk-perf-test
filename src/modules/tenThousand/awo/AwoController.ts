import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awo")
export default class AwoController {
  @operation({
    summary: "Get Awo",
  })
  @get()
  static getAwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awo",
  })
  @post("{id}")
  static createAwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
