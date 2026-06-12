import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmy")
export default class FmyController {
  @operation({
    summary: "Get Fmy",
  })
  @get()
  static getFmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmy",
  })
  @post("{id}")
  static createFmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
