import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("faw")
export default class FawController {
  @operation({
    summary: "Get Faw",
  })
  @get()
  static getFaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Faw",
  })
  @post("{id}")
  static createFaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
