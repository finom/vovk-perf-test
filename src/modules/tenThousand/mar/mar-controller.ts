import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mar")
export default class MarController {
  @operation({
    summary: "Get Mar",
  })
  @get()
  static getMar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mar",
  })
  @post("{id}")
  static createMar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
