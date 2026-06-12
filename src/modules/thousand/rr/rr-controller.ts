import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rr")
export default class RrController {
  @operation({
    summary: "Get Rr",
  })
  @get()
  static getRr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rr",
  })
  @post("{id}")
  static createRr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
