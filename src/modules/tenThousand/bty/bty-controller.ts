import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bty")
export default class BtyController {
  @operation({
    summary: "Get Bty",
  })
  @get()
  static getBty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bty",
  })
  @post("{id}")
  static createBty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
