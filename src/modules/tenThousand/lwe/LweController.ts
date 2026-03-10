import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwe")
export default class LweController {
  @operation({
    summary: "Get Lwe",
  })
  @get()
  static getLwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwe",
  })
  @post("{id}")
  static createLwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
