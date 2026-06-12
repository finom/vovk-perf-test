import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fij")
export default class FijController {
  @operation({
    summary: "Get Fij",
  })
  @get()
  static getFij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fij",
  })
  @post("{id}")
  static createFij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
