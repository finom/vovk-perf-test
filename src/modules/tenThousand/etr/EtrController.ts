import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etr")
export default class EtrController {
  @operation({
    summary: "Get Etr",
  })
  @get()
  static getEtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etr",
  })
  @post("{id}")
  static createEtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
