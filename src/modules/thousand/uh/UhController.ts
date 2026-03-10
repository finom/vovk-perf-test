import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uh")
export default class UhController {
  @operation({
    summary: "Get Uh",
  })
  @get()
  static getUh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uh",
  })
  @post("{id}")
  static createUh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
