import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gno")
export default class GnoController {
  @operation({
    summary: "Get Gno",
  })
  @get()
  static getGno = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gno",
  })
  @post("{id}")
  static createGno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
