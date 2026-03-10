import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyh")
export default class FyhController {
  @operation({
    summary: "Get Fyh",
  })
  @get()
  static getFyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyh",
  })
  @post("{id}")
  static createFyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
