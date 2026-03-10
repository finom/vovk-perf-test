import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhj")
export default class MhjController {
  @operation({
    summary: "Get Mhj",
  })
  @get()
  static getMhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhj",
  })
  @post("{id}")
  static createMhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
