import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bl")
export default class BlController {
  @operation({
    summary: "Get Bl",
  })
  @get()
  static getBl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bl",
  })
  @post("{id}")
  static createBl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
