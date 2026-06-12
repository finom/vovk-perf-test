import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luz")
export default class LuzController {
  @operation({
    summary: "Get Luz",
  })
  @get()
  static getLuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luz",
  })
  @post("{id}")
  static createLuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
