import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("den")
export default class DenController {
  @operation({
    summary: "Get Den",
  })
  @get()
  static getDen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Den",
  })
  @post("{id}")
  static createDen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
