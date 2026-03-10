import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luh")
export default class LuhController {
  @operation({
    summary: "Get Luh",
  })
  @get()
  static getLuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luh",
  })
  @post("{id}")
  static createLuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
