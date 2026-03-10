import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpl")
export default class HplController {
  @operation({
    summary: "Get Hpl",
  })
  @get()
  static getHpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpl",
  })
  @post("{id}")
  static createHpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
