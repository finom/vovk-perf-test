import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bat")
export default class BatController {
  @operation({
    summary: "Get Bat",
  })
  @get()
  static getBat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bat",
  })
  @post("{id}")
  static createBat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
