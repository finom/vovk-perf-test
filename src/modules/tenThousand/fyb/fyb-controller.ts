import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyb")
export default class FybController {
  @operation({
    summary: "Get Fyb",
  })
  @get()
  static getFyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyb",
  })
  @post("{id}")
  static createFyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
